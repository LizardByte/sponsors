import { defineConfig, tierPresets } from '@lizardbyte/contribkit'

export default defineConfig({
  tiers: [
    {
      title: 'String Starters',
      preset: tierPresets.base,
    },
    {
      title: 'Phrase Pioneers',
      monthlyDollars: 100,
      preset: tierPresets.medium,
    },
    {
      title: 'Locale Leaders',
      monthlyDollars: 500,
      preset: tierPresets.large,
    },
    {
      title: 'Word Wizards',
      monthlyDollars: 1000,
      preset: tierPresets.xl,
    },
    {
      title: 'Translation Titans',
      monthlyDollars: 3000,
      preset: tierPresets.xl,
    },
  ],
})
