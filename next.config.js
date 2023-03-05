/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// import Dotenv from 'dotenv'

const mongo = require("mongoose");
require("dotenv").config()
const uri = process.env.mongo_uri
async function connect() {
  await mongo.connect(uri)
}
connect()
