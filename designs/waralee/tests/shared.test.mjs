// This file is auto-generated | Any changes you make will be overwritten.
import { Waralee } from './dist/index.mjs'

// Shared tests
import { testPatternConfig } from '../../../tests/designs/config.mjs'
import { testPatternDrafting } from '../../../tests/designs/drafting.mjs'
//import { testPatternSampling } from '../../../tests/designs/sampling.mjs'

// Test config
testPatternConfig(Waralee)

// Test drafting - Change the second parameter to `true` to log errors
testPatternDrafting(Waralee, false)

// Test sampling - Change the second parameter to `true` to log errors
//testPatternSampling(Waralee, false)
