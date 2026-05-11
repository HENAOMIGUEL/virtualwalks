var APP_DATA = {
  "scenes": [
    {
      "id": "0-principal",
      "name": "principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02720711505434359,
          "pitch": 0.9189789392460774,
          "rotation": 5.497787143782138,
          "target": "5-habitacion2"
        },
        {
          "yaw": 0.781347717100175,
          "pitch": 1.0210245273739869,
          "rotation": 0.7853981633974483,
          "target": "4-habitacion1"
        },
        {
          "yaw": -2.2429848336260267,
          "pitch": 0.9086988754609049,
          "rotation": 7.0685834705770345,
          "target": "2-bao"
        },
        {
          "yaw": 3.1201703375779744,
          "pitch": 0.8286258574355827,
          "rotation": 5.497787143782138,
          "target": "6-entrada"
        },
        {
          "yaw": -0.8065770350680612,
          "pitch": 0.8679266428905272,
          "rotation": 0,
          "target": "3-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ducha",
      "name": "ducha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6258901342053615,
          "pitch": 1.0589933259467905,
          "rotation": 0,
          "target": "2-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bao",
      "name": "baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0659555303520154,
          "pitch": 0.9867004998259965,
          "rotation": 12.566370614359176,
          "target": "1-ducha"
        },
        {
          "yaw": -2.8787275461305146,
          "pitch": 0.8543548379169863,
          "rotation": 0,
          "target": "0-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
      "name": "cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.356011037749191,
          "pitch": 1.0458558680350691,
          "rotation": 17.27875959474387,
          "target": "5-habitacion2"
        },
        {
          "yaw": 2.6286703868204633,
          "pitch": 0.7981690299383608,
          "rotation": 11.780972450961727,
          "target": "4-habitacion1"
        },
        {
          "yaw": -2.994764897540623,
          "pitch": 0.663740381865896,
          "rotation": 0.7853981633974483,
          "target": "0-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-habitacion1",
      "name": "habitacion1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.962341127037879,
          "pitch": 0.5146537413598082,
          "rotation": 0,
          "target": "0-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-habitacion2",
      "name": "habitacion2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1032249353837953,
          "pitch": 0.4676322420587038,
          "rotation": 0,
          "target": "0-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entrada",
      "name": "entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0661791720596243,
          "pitch": 0.8968976469631045,
          "rotation": 0,
          "target": "7-allavadero"
        },
        {
          "yaw": 0.03339158410389942,
          "pitch": 0.8408468785865821,
          "rotation": 5.497787143782138,
          "target": "0-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-allavadero",
      "name": "alLavadero",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.033909858591595565,
          "pitch": 0.9429199581023422,
          "rotation": 0,
          "target": "8-lavadero-compartido"
        },
        {
          "yaw": -3.0765327246523917,
          "pitch": 0.7754675484293294,
          "rotation": 0,
          "target": "6-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lavadero-compartido",
      "name": "lavadero-compartido",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5976366837613902,
          "pitch": 0.8083149424799281,
          "rotation": 0,
          "target": "7-allavadero"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
