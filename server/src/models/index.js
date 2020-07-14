constfs= require('fs')
constpath= require('path')
constSequelize= require('sequelize')

constconfig= require('../config/config')
constdb= {}
constsequelize= new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
    )
    fs.readdirSync().filter().forEach()
    fs.readdirSync(__dirname)
    .filter((file) =>
    file!== 'index.js'
    )
    .forEach((file) =>{
        constmodel= sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })
    db.sequelize= sequelize
    db.Sequelize= Sequelize
    module.exports= db