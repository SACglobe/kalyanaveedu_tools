// English text for the daily rasi palan (Moon transit from the janma rasi), mirroring HOUSE_PALAN in rasi-palan.ts
export interface HouseTextEn {
  summary: string;
  work: string;
  money: string;
  family: string;
  health: string;
}

export const HOUSE_PALAN_EN: Record<number, HouseTextEn> = {
  1: { summary: 'The Moon is in your own sign: a clear, upbeat mind and a good day to begin things.', work: 'Good for starting new efforts; your ideas get noticed.', money: 'Income is steady; small expenses are easy to handle.', family: 'Pleasant time with family. Avoid speaking in the heat of emotion.', health: 'Health is good; make sure you get enough sleep.' },
  2: { summary: 'The Moon is in your 2nd house: watch your words and your spending today.', work: 'Be measured when speaking with colleagues.', money: 'Unplanned expenses may rise; postpone big investments.', family: 'Minor differences at home are possible; stay patient.', health: 'Minor eye or throat discomfort is possible.' },
  3: { summary: 'The Moon is in your 3rd house: courage, effort and success in what you start.', work: 'You will finish what you take up, with help from friends and siblings.', money: 'Small income opportunities come your way.', family: 'Harmony with siblings.', health: 'You feel energetic.' },
  4: { summary: 'The Moon is in your 4th house: peace of mind may dip a little.', work: 'Delays are possible; avoid hasty decisions.', money: 'Expenses on home or vehicle may come up.', family: 'Look after your mother’s health and the home atmosphere.', health: 'Take rest to ease stress.' },
  5: { summary: 'The Moon is in your 5th house: confused thinking is possible.', work: 'Think important decisions through before acting.', money: 'Avoid hasty investments and speculation.', family: 'Worries about children may surface; speak kindly.', health: 'Minor stomach upsets are possible; watch your diet.' },
  6: { summary: 'The Moon is in your 6th house: a day to overcome opposition.', work: 'You outdo competitors; good for clearing pending work.', money: 'Favourable for repaying debts and collecting dues.', family: 'Peace at home.', health: 'Health improves; a long-standing complaint eases.' },
  7: { summary: 'The Moon is in your 7th house: relationships feel sweeter.', work: 'Good for partnerships and negotiations.', money: 'Gain through a partner is possible.', family: 'A happy time with your spouse; good for marriage talks.', health: 'You feel content.' },
  8: { summary: 'The Moon is in your 8th house (Chandrashtama): extra care is needed today.', work: 'Better to postpone new contracts and major decisions.', money: 'Be careful with money transactions; do not stand guarantee for anyone.', family: 'Avoid arguments.', health: 'Take care while travelling; keep the mind calm.' },
  9: { summary: 'The Moon is in your 9th house: small obstacles may appear.', work: 'Expected help may be delayed; go steadily.', money: 'Unexpected expenses are possible.', family: 'Listen to the advice of elders.', health: 'Avoid long journeys; prayer brings calm.' },
  10: { summary: 'The Moon is in your 10th house: success and recognition at work.', work: 'Appreciation at the workplace and wins in key tasks.', money: 'Income rises; new opportunities arrive.', family: 'Your family supports you.', health: 'You stay active.' },
  11: { summary: 'The Moon is in your 11th house: gains and wishes fulfilled.', work: 'Friends and seniors help get things done.', money: 'Expected money arrives; good for investing.', family: 'Happy news is possible.', health: 'Wellbeing is strong.' },
  12: { summary: 'The Moon is in your 12th house: expenses rise; keep your mind calm.', work: 'Workload may increase; plan ahead.', money: 'Auspicious or medical expenses are possible; watch savings.', family: 'Sleeplessness or low mood may appear; meditation helps.', health: 'Rest is needed; do not neglect sleep.' },
};

export const RASI_SLUG_EN: Record<string, string> = {
  mesham: 'Aries', rishabam: 'Taurus', mithunam: 'Gemini', kadagam: 'Cancer', simmam: 'Leo', kanni: 'Virgo',
  thulaam: 'Libra', viruchigam: 'Scorpio', dhanusu: 'Sagittarius', magaram: 'Capricorn', kumbam: 'Aquarius', meenam: 'Pisces',
};
