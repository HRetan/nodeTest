const express = require("express")
const Content = require("../models/content.js")

const content = {
  readAll: async (req, res) => {},

  read: async (req, res) => {},
  createContent: async (req, res) => {
    try {
      const result = await Content.create(req.body)
      res.send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  updateContent: async (req, res) => {},
}

module.exports = content
