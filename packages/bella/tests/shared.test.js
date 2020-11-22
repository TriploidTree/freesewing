// This file is auto-generated.
// Changes you make will be overwritten.
const expect = require("chai").expect;
const models = require("@freesewing/models")
const patterns = require("@freesewing/pattern-info")

const Bella  = require('../dist')

// Shared tests
const testPatternConfig = require('../../../tests/patterns/config')
const testPatternDrafting = require('../../../tests/patterns/drafting')
const testPatternSampling = require('../../../tests/patterns/sampling')

// Test config
testPatternConfig(
  'bella',
  new Bella(),
  expect,
  models,
  patterns
)

// Test drafting
testPatternDrafting(
  'bella',
  Bella,
  expect,
  models,
  patterns
)

// Test sampling
testPatternSampling(
  'bella',
  Bella,
  expect,
  models,
  patterns
)
