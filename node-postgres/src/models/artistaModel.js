'use strict';

module.exports = (sequelize, DataTypes) => {
  const Artista = sequelize.define('Artista', {
    id_artista: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    primer_nombre_artista: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    segundo_nombre_artista: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    primer_apellido_artista: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    segundo_apellido_artista: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fecha_nacimiento_artista: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_fallecimiento_artista: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nombre_artistico_artista: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    resumen_caracteristicas_artista: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'artistas',
    timestamps: false
  });

  return Artista;
};
