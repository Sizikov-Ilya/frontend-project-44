#!/usr/bin/env node
import runGame from '../src/index.js';
import { generateRound, gameDescription } from '../src/games/gcd.js';

runGame(gameDescription, generateRound);
