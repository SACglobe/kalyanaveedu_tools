import os
import re

BLOG_ROOT = r'c:\sac\tools\kalyanaveedu\src\app\blog'
BLOG_DATA_FILE = r'c:\sac\tools\kalyanaveedu\src\lib\blog-data.ts'

def get_blog_metadata():
    with open(BLOG_DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to extract slug and category from BLOG_POSTS array
    # Format: slug: '/blog/oonjal-ceremony', ... category: 'Traditions'
    metadata = {}
    pattern = re.compile(r"slug:\s*'([^']+)',.*?category:\s*'([^']+)'", re.DOTALL)
    matches = pattern.findall(content)
    for slug, category in matches:
        metadata[slug] = category
    return metadata

def process_file(filepath, slug, category):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add import if missing
    if 'import RelatedArticles' not in content:
        import_stmt = "import RelatedArticles from '@/components/blog/RelatedArticles';\n"
        # Find the last import line
        lines = content.split('\n')
        last_import_idx = -1
        for i, line in enumerate(lines):
            if line.startswith('import '):
                last_import_idx = i
        
        if last_import_idx != -1:
            lines.insert(last_import_idx + 1, import_stmt)
            content = '\n'.join(lines)
        else:
            content = import_stmt + content

    # 2. Add RelatedArticles after AuthorBio (or at the end of article)
    if 'RelatedArticles' in content and '<RelatedArticles' not in content:
        # Check if AuthorBio exists
        if '<AuthorBio' in content:
            # Insert after the closing of AuthorBio
            # Pattern to match <AuthorBio ... /> which can be multi-line
            author_bio_pattern = re.compile(r'(<AuthorBio.*?\/>)', re.DOTALL)
            match = author_bio_pattern.search(content)
            if match:
                injection = f'\n                <RelatedArticles \n                    currentSlug="{slug}" \n                    category="{category}" \n                />'
                content = content[:match.end()] + injection + content[match.end():]
        else:
            # If no AuthorBio, find the end of the article content
            # Assuming it's inside <article> ... </div> </article>
            article_end_idx = content.rfind('</div>')
            if article_end_idx != -1:
                injection = f'\n                <RelatedArticles \n                    currentSlug="{slug}" \n                    category="{category}" \n                />'
                content = content[:article_end_idx] + injection + content[article_end_idx:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    metadata = get_blog_metadata()
    print(f"Found metadata for {len(metadata)} posts.")

    for folder in os.listdir(BLOG_ROOT):
        folder_path = os.path.join(BLOG_ROOT, folder)
        if os.path.isdir(folder_path):
            file_path = os.path.join(folder_path, 'page.tsx')
            if os.path.exists(file_path):
                slug = f'/blog/{folder}'
                category = metadata.get(slug, 'General')
                print(f"Processing {slug} (Category: {category})...")
                process_file(file_path, slug, category)

if __name__ == '__main__':
    main()
