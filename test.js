/* global describe, it */
/* eslint-disable padded-blocks */

var ClockTime = require('./index')
var expect = require('chai').expect

describe('ClockTime', () => {

  describe('fromSeconds', () => {

    it('creates an object with expected properties', () => {
      expect(ClockTime.fromSeconds(1)).to.eql({
        hours: 0, minutes: 0, seconds: 1
      })

      expect(ClockTime.fromSeconds(60)).to.eql({
        hours: 0, minutes: 1, seconds: 0
      })

      expect(ClockTime.fromSeconds(3600)).to.eql({
        hours: 1, minutes: 0, seconds: 0
      })

      expect(ClockTime.fromSeconds(3661)).to.eql({
        hours: 1, minutes: 1, seconds: 1
      })

    })

  })

  describe('fromMinutes', () => {

    it('creates an object with expected properties', () => {
      expect(ClockTime.fromMinutes(1)).to.eql({
        hours: 0, minutes: 1, seconds: 0
      })

      expect(ClockTime.fromMinutes(60)).to.eql({
        hours: 1, minutes: 0, seconds: 0
      })

      expect(ClockTime.fromMinutes(61)).to.eql({
        hours: 1, minutes: 1, seconds: 0
      })

    })

  })

  describe('fromHours', () => {

    it('creates an object with expected properties', () => {
      expect(ClockTime.fromHours(1)).to.eql({
        hours: 1, minutes: 0, seconds: 0
      })

      expect(ClockTime.fromHours(24)).to.eql({
        hours: 24, minutes: 0, seconds: 0
      })
    })

  })
})
