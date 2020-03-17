'use strict';

module.exports = function(sequelize, DataTypes) {
  const highscore = sequelize.define(`highscore`, {
    user: DataTypes.STRING,
    highscore: DataTypes.INTEGER
  });
  return highscore;
};
