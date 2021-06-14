const {Model, DataTypes } = require('sequelize')

const db_fields = {
  named: {
    name: DataTypes.STRING
  },
  heirarchy: {
    parent_id: DataTypes.STRING
  },
	url: {
	  data_url: DataTypes.STRING,
    data_type: DataTypes.STRING
	},
  link: {
    public_id: DataTypes.STRING
  },
  tag: {
    tags: DataTypes.STRING    
  }
}

const models = {
  "Link": ['link', 'tag'],
  "Actor":['named', 'heirarchy', 'url', 'link', 'tag'],
  "Location":['named', 'heirarchy', 'url', 'link', 'tag'],
  "Item":['named', 'heirarchy', 'url', 'link', 'tag'],
  "Encounter":['named', 'heirarchy', 'url', 'link', 'tag'],
  "Scene":['named', 'heirarchy', 'url', 'link', 'tag'],
  "Adventure":['named', 'heirarchy', 'url', 'link', 'tag'],
  "Campaign":['named', 'heirarchy', 'url', 'link', 'tag'],
  "World":['named', 'heirarchy', 'url', 'link', 'tag'],
  "Universe":['named', 'heirarchy', 'url', 'link', 'tag']
}


class Record {
  static self = null;
  constructor({sqlizr}) {
    if (Record.self) return Record.self
    Record.self = this;
    Object.entries(models).reduce((m, [type, templates]) => {
      m[type] = sqlizr.define(type, (templates.reduce((m, t) => {
        return Object.assign(m, db_fields[t])
      }, {})))
      return m
    }, this)
  }
}

module.exports = Record