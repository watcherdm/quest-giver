'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class World extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  World.init({
    name: DataTypes.STRING,
    parent_id: DataTypes.STRING,
    data_url: DataTypes.STRING,
    data_type: DataTypes.STRING,
    public_id: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'World',
  });
  return World;
};