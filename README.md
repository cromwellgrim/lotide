# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cromwellgrim/lotide`

**Require it:**

`const _ = require('@cromwell/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  head: returns the first element of an array
  tail: removes the first element of an array and returns the rest
  middle: returns the middlest elements of an array
  assertArraysEqual: determines if two arrays are equal
  assertEqual: determines if two strings/nums are equal
  assertObjectsEqual: determines if 2 objects are equal
  countLetters: counts how many of each letter in a string
  countOnly: will only count up what you tell it to
  eqArrays: determines if 2 arrays have equal elements at each index position
  eqObject: determines if 2 objects have equal key:value pairs at each index position
  findKey: finds specified keys in an object
  findKeyByValue: finds keys by their value in an object
  letterPositions: finds letters by their index positions
  mapped: collects elements from an array by going through according to index
  takeUntil: takes elements from an array until it hits a supplied value
  without: returns an array minus a specified value