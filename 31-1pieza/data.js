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
          "yaw": -0.836378188561202,
          "pitch": 0.7062595893124417,
          "rotation": 10.995574287564278,
          "target": "1-principal2"
        },
        {
          "yaw": 1.3570723295691245,
          "pitch": 0.8558499329259739,
          "rotation": 0,
          "target": "5-lavadero-compartido"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-principal2",
      "name": "principal2",
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
          "yaw": 0.039559450734723,
          "pitch": 0.904209153508102,
          "rotation": 0,
          "target": "3-bao"
        },
        {
          "yaw": -1.6655297055051683,
          "pitch": 0.9867699992883452,
          "rotation": 0,
          "target": "2-pieza"
        },
        {
          "yaw": -2.4914295794486065,
          "pitch": 0.7137496331421573,
          "rotation": 0,
          "target": "0-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pieza",
      "name": "pieza",
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
          "yaw": 1.2080704880948847,
          "pitch": 0.6336046519389722,
          "rotation": 0,
          "target": "1-principal2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao",
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
          "yaw": -0.16800957948218098,
          "pitch": 1.0926035309431956,
          "rotation": 0,
          "target": "4-ducha"
        },
        {
          "yaw": 2.5077823352991615,
          "pitch": 0.8621215649870102,
          "rotation": 0,
          "target": "1-principal2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ducha",
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
          "yaw": 2.8418174269847,
          "pitch": 1.020067791730396,
          "rotation": 0,
          "target": "3-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lavadero-compartido",
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
          "yaw": -2.6560227023458705,
          "pitch": 0.9357772334175145,
          "rotation": 0,
          "target": "0-principal"
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
