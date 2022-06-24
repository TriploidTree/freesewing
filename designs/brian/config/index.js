import { version } from '../package.json'

export default {
  version,
  name: 'brian',
  design: 'Joost De Cock',
  code: 'Joost De Cock',
  department: 'tops',
  type: 'block',
  difficulty: 3,
  optionGroups: {
    fit: [
      'chestEase',
      'collarEase',
      'bicepsEase',
      'cuffEase',
      'shoulderEase',
      'lengthBonus',
      'sleeveLengthBonus',
    ],
    style: ['s3Collar', 's3Armhole'],
    advanced: [
      'acrossBackFactor',
      'armholeDepthFactor',
      'backNeckCutout',
      'frontArmholeDeeper',
      'shoulderSlopeReduction',
      'sleeveWidthGuarantee',
      {
        sleevecap: [
          'sleevecapEase',
          'sleevecapTopFactorX',
          'sleevecapTopFactorY',
          'sleevecapBackFactorX',
          'sleevecapBackFactorY',
          'sleevecapFrontFactorX',
          'sleevecapFrontFactorY',
          'sleevecapQ1Offset',
          'sleevecapQ2Offset',
          'sleevecapQ3Offset',
          'sleevecapQ4Offset',
          'sleevecapQ1Spread1',
          'sleevecapQ1Spread2',
          'sleevecapQ2Spread1',
          'sleevecapQ2Spread2',
          'sleevecapQ3Spread1',
          'sleevecapQ3Spread2',
          'sleevecapQ4Spread1',
          'sleevecapQ4Spread2',
        ],
      },
    ],
  },
  measurements: [
    'biceps',
    'chest',
    'hpsToWaistBack',
    'waistToHips',
    'neck',
    'shoulderSlope',
    'shoulderToShoulder',
    'shoulderToWrist',
    'wrist',
  ],
  dependencies: {
    back: 'base',
    front: 'back',
    sleevecap: 'front',
    sleeve: 'sleevecap',
  },
  inject: {
    back: 'base',
    front: 'back',
    sleeve: 'sleevecap',
  },
  hide: ['base', 'sleevecap'],
  options: {
    // Constants
    brianFitSleeve: true,
    brianFitCollar: true,
    collarFactor: 4.8,

    // Percentages
    acrossBackFactor: { pct: 98, min: 93, max: 100 },
    armholeDepthFactor: { pct: 55, min: 50, max: 70 },
    backNeckCutout: { pct: 5, min: 2, max: 8 },
    bicepsEase: { pct: 15, min: 0, max: 50 },
    chestEase: { pct: 15, min: -4, max: 35 },
    collarEase: { pct: 5, min: 0, max: 10 },
    cuffEase: { pct: 20, min: 0, max: 200 },
    frontArmholeDeeper: { pct: 0.2, min: 0, max: 0.5 },
    lengthBonus: { pct: 0, min: -4, max: 60 },
    shoulderEase: { pct: 0, min: -2, max: 6 },
    shoulderSlopeReduction: { pct: 0, min: 0, max: 80 },
    // s3 is short for Shoulder Seam Shift
    s3Collar: { pct: 0, min: -100, max: 100 },
    s3Armhole: { pct: 0, min: -100, max: 100 },
    sleevecapEase: { pct: 0, min: 0, max: 10 },
    sleevecapTopFactorX: { pct: 50, min: 25, max: 75 },
    sleevecapTopFactorY: { pct: 45, min: 35, max: 125 },
    sleevecapBackFactorX: { pct: 60, min: 35, max: 65 },
    sleevecapBackFactorY: { pct: 33, min: 30, max: 65 },
    sleevecapFrontFactorX: { pct: 55, min: 35, max: 65 },
    sleevecapFrontFactorY: { pct: 33, min: 30, max: 65 },
    sleevecapQ1Offset: { pct: 1.7, min: 0, max: 7 },
    sleevecapQ2Offset: { pct: 3.5, min: 0, max: 7 },
    sleevecapQ3Offset: { pct: 2.5, min: 0, max: 7 },
    sleevecapQ4Offset: { pct: 1, min: 0, max: 7 },
    sleevecapQ1Spread1: { pct: 10, min: 4, max: 20 },
    sleevecapQ1Spread2: { pct: 15, min: 4, max: 20 },
    sleevecapQ2Spread1: { pct: 15, min: 4, max: 20 },
    sleevecapQ2Spread2: { pct: 10, min: 4, max: 20 },
    sleevecapQ3Spread1: { pct: 10, min: 4, max: 20 },
    sleevecapQ3Spread2: { pct: 8, min: 4, max: 20 },
    sleevecapQ4Spread1: { pct: 7, min: 4, max: 20 },
    sleevecapQ4Spread2: { pct: 6.3, min: 4, max: 20 },
    sleeveWidthGuarantee: { pct: 90, min: 25, max: 100 },
    sleeveLengthBonus: { pct: 0, min: -40, max: 10 },
  },
}
