TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "distance": 1,
    "yaw": 16.28,
    "backwardYaw": -140.19,
    "panorama": {
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": -140.19,
       "backwardYaw": 16.28,
       "panorama": "this.panorama_48851598_437C_AFCC_41A1_2F16086AB75E"
      }
     ],
     "hfovMax": 130,
     "id": "panorama_48E4DE91_4373_9DDF_41B4_073939B51C66",
     "thumbnailUrl": "media/panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_t.jpg",
     "class": "Panorama",
     "pitch": 0,
     "hfovMin": 60,
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 2688,
          "width": 5376,
          "url": "media/panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_48E4DE91_4373_9DDF_41B4_073939B51C66.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "inertia": false,
         "hfov": 44.4,
         "id": "panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_tcap0",
         "rotate": false,
         "class": "TripodCapPanoramaOverlay",
         "image": {
          "levels": [
           {
            "height": 850,
            "width": 850,
            "url": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "angle": 0
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "id": "overlay_455E0936_48F3_1B7A_41C2_6FE715941D80",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.setMediaBehaviour(this.playList_5E91470E_5291_B4FF_41BE_BEC686D80FA2, 0, this.panorama_48E4DE91_4373_9DDF_41B4_073939B51C66)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.55,
           "yaw": 45.79,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 18,
              "url": "media/panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 6.94
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 4.55,
           "yaw": 45.79,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 58,
              "width": 68,
              "url": "media/panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 6.94
          }
         ]
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "data": {
          "label": "Entrar"
         },
         "id": "overlay_45610676_48FD_09FA_41D0_17F5AA6EE5B5",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 3.52,
           "yaw": 45.74,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 24,
              "url": "media/panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_0_HS_2_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 10.18
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 3.52,
           "yaw": 45.74,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 34,
              "width": 53,
              "url": "media/panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 10.18
          }
         ]
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "id": "overlay_408C11F5_4D19_A7AB_41C1_A84920426409",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_48851598_437C_AFCC_41A1_2F16086AB75E, this.camera_5E88573B_5291_B325_41B8_339A26628A2F); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 13.46,
           "yaw": -140.19,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 112,
              "width": 333,
              "url": "media/panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -52.94
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_t.jpg",
       "class": "SphericPanoramaFrame"
      }
     ],
     "label": "R0010081_20200523111142",
     "partial": false,
     "vfov": 180
    }
   }
  ],
  "hfovMax": 130,
  "id": "panorama_48851598_437C_AFCC_41A1_2F16086AB75E",
  "thumbnailUrl": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "inertia": false,
      "hfov": 45,
      "id": "panorama_48851598_437C_AFCC_41A1_2F16086AB75E_tcap0",
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5486D842_444D_0B48_41CE_78125186F54A",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_48E4DE91_4373_9DDF_41B4_073939B51C66, this.camera_5E9D3724_5291_B323_41C8_CB4696F16006); this.setMediaBehaviour(this.playList_5EEFB70C_5291_B4FC_41CD_C5ACB044009F, 0, this.panorama_48851598_437C_AFCC_41A1_2F16086AB75E)",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Garage",
        "displayTooltipInTouchScreens": true
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.15,
        "yaw": 16.28,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 25,
           "url": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.21
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 4.15,
        "yaw": 16.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 62,
           "url": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.21
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010080_20200523111103",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.07,
   "pitch": 3.21
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "timeToIdle": 6000,
  "id": "panorama_48851598_437C_AFCC_41A1_2F16086AB75E_camera",
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [],
   "class": "PanoramaCameraSequence"
  },
  "manualRotationSpeed": 1228
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_48BD8A54_4374_6545_41C3_0BEC47C5DB04",
  "thumbnailUrl": "media/panorama_48BD8A54_4374_6545_41C3_0BEC47C5DB04_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_48BD8A54_4374_6545_41C3_0BEC47C5DB04_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_48BD8A54_4374_6545_41C3_0BEC47C5DB04.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "inertia": false,
      "hfov": 45,
      "id": "panorama_48BD8A54_4374_6545_41C3_0BEC47C5DB04_tcap0",
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_48BD8A54_4374_6545_41C3_0BEC47C5DB04_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010101_20200523112355",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_48BD8A54_4374_6545_41C3_0BEC47C5DB04_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_48C891C6_4377_A745_4184_5ED58FCC5763",
  "thumbnailUrl": "media/panorama_48C891C6_4377_A745_4184_5ED58FCC5763_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_48C891C6_4377_A745_4184_5ED58FCC5763_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_48C891C6_4377_A745_4184_5ED58FCC5763.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "inertia": false,
      "hfov": 45,
      "id": "panorama_48C891C6_4377_A745_4184_5ED58FCC5763_tcap0",
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_48C891C6_4377_A745_4184_5ED58FCC5763_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010102_20200523112440",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_48C891C6_4377_A745_4184_5ED58FCC5763_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_59F9F289_4933_0916_41C4_A9EE03A1D54D",
  "thumbnailUrl": "media/panorama_59F9F289_4933_0916_41C4_A9EE03A1D54D_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_59F9F289_4933_0916_41C4_A9EE03A1D54D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_59F9F289_4933_0916_41C4_A9EE03A1D54D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5B7D962F_4935_096A_41C8_304B82561845",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.setMediaBehaviour(this.playList_5EEE170C_5291_B4FC_41A2_523A52733464, 0, this.panorama_59F9F289_4933_0916_41C4_A9EE03A1D54D)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.17,
        "yaw": -148.53,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_59F9F289_4933_0916_41C4_A9EE03A1D54D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.05
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_59F9F289_4933_0916_41C4_A9EE03A1D54D_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010085_20200523111450",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.84,
   "pitch": -4.27
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_59F9F289_4933_0916_41C4_A9EE03A1D54D_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02",
  "thumbnailUrl": "media/panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5AF20509_4917_0B16_41BF_3989A5EFE078",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.14,
        "yaw": 15.26,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.06
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5D6237BF_4915_3769_41A4_1D7ED10D395A",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.08,
        "yaw": -16.89,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.82
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5D3AA6A2_4915_091A_41B0_D15EB2FD9B14",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 18.44,
        "yaw": 64.75,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.36
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5DFAC02A_4915_096A_41C5_C74B4288B5B0",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 17.02,
        "yaw": 132.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -27.67
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5D09619E_4913_0B2A_4151_6CB0D19ED72F",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.setMediaBehaviour(this.playList_5EEEF70E_5291_B4FF_41C9_644B52A3B6AE, 0, this.panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 18.93,
        "yaw": -53.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 288,
           "url": "media/panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.09
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010090_20200523111721",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5812846C_493D_09EE_4195_FE3DB451D9C8",
  "thumbnailUrl": "media/panorama_5812846C_493D_09EE_4195_FE3DB451D9C8_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5812846C_493D_09EE_4195_FE3DB451D9C8_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5812846C_493D_09EE_4195_FE3DB451D9C8_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5812846C_493D_09EE_4195_FE3DB451D9C8.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010091_20200523111826",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5812846C_493D_09EE_4195_FE3DB451D9C8_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_581202FE_493D_0EEB_41A3_3E33CFBB5EFF",
  "thumbnailUrl": "media/panorama_581202FE_493D_0EEB_41A3_3E33CFBB5EFF_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_581202FE_493D_0EEB_41A3_3E33CFBB5EFF_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_581202FE_493D_0EEB_41A3_3E33CFBB5EFF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_581202FE_493D_0EEB_41A3_3E33CFBB5EFF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010092_20200523111903",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_581202FE_493D_0EEB_41A3_3E33CFBB5EFF_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_580C7BC9_493D_7F29_41BA_3D276F2FC019",
  "thumbnailUrl": "media/panorama_580C7BC9_493D_7F29_41BA_3D276F2FC019_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_580C7BC9_493D_7F29_41BA_3D276F2FC019_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_580C7BC9_493D_7F29_41BA_3D276F2FC019_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_580C7BC9_493D_7F29_41BA_3D276F2FC019.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010093_20200523111935",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_580C7BC9_493D_7F29_41BA_3D276F2FC019_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5814366B_493D_09E9_41C2_3DD11CC74165",
  "thumbnailUrl": "media/panorama_5814366B_493D_09E9_41C2_3DD11CC74165_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5814366B_493D_09E9_41C2_3DD11CC74165_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5814366B_493D_09E9_41C2_3DD11CC74165_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5814366B_493D_09E9_41C2_3DD11CC74165.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010094_20200523112002",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5814366B_493D_09E9_41C2_3DD11CC74165_camera"
 },
 {
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "distance": 1,
    "yaw": -139.46,
    "backwardYaw": 141.63,
    "panorama": {
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": 141.63,
       "backwardYaw": -139.46,
       "panorama": "this.panorama_581367FE_493F_16EA_41BE_FF19DE61412A"
      }
     ],
     "hfovMax": 130,
     "id": "panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3",
     "thumbnailUrl": "media/panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3_t.jpg",
     "class": "Panorama",
     "pitch": 0,
     "hfovMin": 60,
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 2688,
          "width": 5376,
          "url": "media/panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "id": "overlay_5D618987_491F_1B19_41B7_BC687163642F",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_581367FE_493F_16EA_41BE_FF19DE61412A, this.camera_5EB21746_5291_B36F_41B9_D605D69FAEBB); this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 19.21,
           "yaw": 141.63,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 288,
              "width": 287,
              "url": "media/panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.79
          }
         ]
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "id": "overlay_5DF8EEB1_491F_3976_41C5_8F1130D8B9FD",
         "areas": [
          {
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 19.21,
           "yaw": 87.61,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 288,
              "width": 287,
              "url": "media/panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.04
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3_t.jpg",
       "class": "SphericPanoramaFrame"
      }
     ],
     "label": "R0010095_20200523112032",
     "partial": false,
     "vfov": 180
    }
   }
  ],
  "hfovMax": 130,
  "id": "panorama_581367FE_493F_16EA_41BE_FF19DE61412A",
  "thumbnailUrl": "media/panorama_581367FE_493F_16EA_41BE_FF19DE61412A_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_581367FE_493F_16EA_41BE_FF19DE61412A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_581367FE_493F_16EA_41BE_FF19DE61412A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5C64AD55_4913_3B3E_41BD_C403BA3A9F90",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3, this.camera_5E83D730_5291_B323_41CC_EFC6E2DD5052); this.setMediaBehaviour(this.playList_5EEEF70E_5291_B4FF_41C9_644B52A3B6AE, 0, this.panorama_581367FE_493F_16EA_41BE_FF19DE61412A)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.28,
        "yaw": -139.46,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 288,
           "url": "media/panorama_581367FE_493F_16EA_41BE_FF19DE61412A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.54
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_581367FE_493F_16EA_41BE_FF19DE61412A_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010096_20200523112109",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 80.98,
   "pitch": -10.32
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_581367FE_493F_16EA_41BE_FF19DE61412A_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5808B068_493F_0916_41B2_0E7514A95447",
  "thumbnailUrl": "media/panorama_5808B068_493F_0916_41B2_0E7514A95447_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5808B068_493F_0916_41B2_0E7514A95447_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5808B068_493F_0916_41B2_0E7514A95447_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5808B068_493F_0916_41B2_0E7514A95447.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010097_20200523112153",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5808B068_493F_0916_41B2_0E7514A95447_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_581578A4_493F_791E_41BE_5238D55835C9",
  "thumbnailUrl": "media/panorama_581578A4_493F_791E_41BE_5238D55835C9_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_581578A4_493F_791E_41BE_5238D55835C9_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_581578A4_493F_791E_41BE_5238D55835C9_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_581578A4_493F_791E_41BE_5238D55835C9.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010098_20200523112229",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_581578A4_493F_791E_41BE_5238D55835C9_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5815C0B1_493F_0976_41D0_D81998E29C38",
  "thumbnailUrl": "media/panorama_5815C0B1_493F_0976_41D0_D81998E29C38_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5815C0B1_493F_0976_41D0_D81998E29C38_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5815C0B1_493F_0976_41D0_D81998E29C38_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5815C0B1_493F_0976_41D0_D81998E29C38.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010100_20200523112307",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5815C0B1_493F_0976_41D0_D81998E29C38_camera"
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_48851598_437C_AFCC_41A1_2F16086AB75E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_48851598_437C_AFCC_41A1_2F16086AB75E_camera",
    "end": "this.setComponentVisibility(this.Image_487A08A1_444F_0BCB_41CE_85736DEDE518, true, -1, this.effect_562EC404_4477_3AC9_41D1_1009D911D610, 'showEffect', false); this.setComponentVisibility(this.Image_487A08A1_444F_0BCB_41CE_85736DEDE518, true, -1, this.effect_562EC404_4477_3AC9_41D1_1009D911D610, 'showEffect', false); this.setComponentVisibility(this.IconButton_48E587E7_4453_0548_41C1_C5CE1C0D3955, true, -1, this.effect_562E0404_4477_3AC9_41B9_B2A66A27502B, 'showEffect', false); this.setComponentVisibility(this.IconButton_48E587E7_4453_0548_41C1_C5CE1C0D3955, true, -1, this.effect_562E0404_4477_3AC9_41B9_B2A66A27502B, 'showEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Image_487A08A1_444F_0BCB_41CE_85736DEDE518, true, -1, this.effect_562EF404_4477_3AC9_41C3_DC5B260F16FD, 'showEffect', false); this.setComponentVisibility(this.IconButton_48E587E7_4453_0548_41C1_C5CE1C0D3955, true, -1, this.effect_562E2404_4477_3AC9_41C8_0F91912F933A, 'showEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_48BD8A54_4374_6545_41C3_0BEC47C5DB04",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_48BD8A54_4374_6545_41C3_0BEC47C5DB04_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_48C891C6_4377_A745_4184_5ED58FCC5763",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_48C891C6_4377_A745_4184_5ED58FCC5763_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_59F9F289_4933_0916_41C4_A9EE03A1D54D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_59F9F289_4933_0916_41C4_A9EE03A1D54D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5817ABF6_493D_7EFA_419B_A16FA73A3D02_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5812846C_493D_09EE_4195_FE3DB451D9C8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5812846C_493D_09EE_4195_FE3DB451D9C8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_581202FE_493D_0EEB_41A3_3E33CFBB5EFF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_581202FE_493D_0EEB_41A3_3E33CFBB5EFF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_580C7BC9_493D_7F29_41BA_3D276F2FC019",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_580C7BC9_493D_7F29_41BA_3D276F2FC019_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5814366B_493D_09E9_41C2_3DD11CC74165",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5814366B_493D_09E9_41C2_3DD11CC74165_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_581367FE_493F_16EA_41BE_FF19DE61412A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_581367FE_493F_16EA_41BE_FF19DE61412A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5808B068_493F_0916_41B2_0E7514A95447",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5808B068_493F_0916_41B2_0E7514A95447_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_581578A4_493F_791E_41BE_5238D55835C9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_581578A4_493F_791E_41BE_5238D55835C9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5815C0B1_493F_0976_41D0_D81998E29C38",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5815C0B1_493F_0976_41D0_D81998E29C38_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.panorama_48E4DE91_4373_9DDF_41B4_073939B51C66",
 {
  "id": "panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -159.63,
   "pitch": 6.5
  }
 },
 {
  "items": [
   {
    "camera": "this.panorama_48E4DE91_4373_9DDF_41B4_073939B51C66_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_48E4DE91_4373_9DDF_41B4_073939B51C66",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_5EEFB70C_5291_B4FC_41CD_C5ACB044009F",
  "class": "PlayList"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_581A2431_4933_0976_41B4_005DE826E3AC",
  "thumbnailUrl": "media/panorama_581A2431_4933_0976_41B4_005DE826E3AC_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_581A2431_4933_0976_41B4_005DE826E3AC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_581A2431_4933_0976_41B4_005DE826E3AC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5A5F989B_490F_192A_41D0_A1F47A3FF082",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.setMediaBehaviour(this.playList_5E91A70F_5291_B4FD_41C8_9518B62EB8A4, 0, this.panorama_581A2431_4933_0976_41B4_005DE826E3AC)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.09,
        "yaw": -23.17,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_581A2431_4933_0976_41B4_005DE826E3AC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.57
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_581A2431_4933_0976_41B4_005DE826E3AC_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010087_20200523111537",
  "partial": false,
  "vfov": 180
 },
 {
  "id": "panorama_581A2431_4933_0976_41B4_005DE826E3AC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.24,
   "pitch": -3.85
  }
 },
 {
  "items": [
   {
    "camera": "this.panorama_581A2431_4933_0976_41B4_005DE826E3AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_581A2431_4933_0976_41B4_005DE826E3AC",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_5EEE170C_5291_B4FC_41A2_523A52733464",
  "class": "PlayList"
 },
 "this.panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 111.19,
   "pitch": -6.07
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3_camera"
 },
 {
  "items": [
   {
    "camera": "this.panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_580DBEFB_493D_16EA_41CF_4C9BC9EE18D3",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_5EEEF70E_5291_B4FF_41C9_644B52A3B6AE",
  "class": "PlayList"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666",
  "thumbnailUrl": "media/panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "inertia": false,
      "hfov": 45,
      "id": "panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666_tcap0",
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_582F05D4_490D_0B3E_41CC_80D6068E92AE",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.setMediaBehaviour(this.playList_5E91270F_5291_B4FD_41C3_A3164939FF98, 0, this.panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.64,
        "yaw": 129.95,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.83
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 16.64,
        "yaw": 129.95,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 247,
           "width": 249,
           "url": "media/panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.83
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Medio ba\u00f1o"
      },
      "id": "overlay_5BEA7E6B_4915_39EA_4184_0CD27A61129C",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.61,
        "yaw": 129.55,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 48,
           "url": "media/panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.87
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 10.61,
        "yaw": 129.55,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 52,
           "width": 158,
           "url": "media/panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.87
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010082_20200523111325",
  "partial": false,
  "vfov": 180
 },
 {
  "id": "panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 26.67,
   "pitch": -6.36
  }
 },
 {
  "items": [
   {
    "camera": "this.panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_48C17EBB_4373_9DC3_41A7_1812FAF69666",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_5E91470E_5291_B4FF_41BE_BEC686D80FA2",
  "class": "PlayList"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14",
  "thumbnailUrl": "media/panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "inertia": false,
      "hfov": 45,
      "id": "panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14_tcap0",
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_48851598_437C_AFCC_41A1_2F16086AB75E_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Salida"
      },
      "id": "overlay_5B1723D2_491F_0F3A_41C0_3A07C1D21E29",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.21,
        "yaw": -129.94,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.54
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.21,
        "yaw": -129.94,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.54
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5B409BC3_4915_1F1A_41B7_294CDB245EE2",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 14,
        "yaw": -10.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 221,
           "width": 213,
           "url": "media/panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.04
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010083_20200523111356",
  "partial": false,
  "vfov": 180
 },
 {
  "id": "panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 93.38,
   "pitch": -5.43
  }
 },
 {
  "items": [
   {
    "camera": "this.panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_48C276AC_4373_EDC5_41B8_D3BA0BF16F14",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_5E91270F_5291_B4FD_41C3_A3164939FF98",
  "class": "PlayList"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_58188C34_4933_397E_41D1_320306C3BC27",
  "thumbnailUrl": "media/panorama_58188C34_4933_397E_41D1_320306C3BC27_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_58188C34_4933_397E_41D1_320306C3BC27_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_58188C34_4933_397E_41D1_320306C3BC27.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5A3C1CC1_490D_7916_418B_20BB4D9DFD49",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.setMediaBehaviour(this.playList_5E904710_5291_B4E3_4196_F7505E901C00, 0, this.panorama_58188C34_4933_397E_41D1_320306C3BC27)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.2,
        "yaw": 19.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_58188C34_4933_397E_41D1_320306C3BC27_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.8
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5C038167_4913_0B1A_41B4_081AE6AB0F93",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.setMediaBehaviour(this.playList_5E906710_5291_B4E3_41A8_4120C92E84AB, 0, this.panorama_58188C34_4933_397E_41D1_320306C3BC27)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.21,
        "yaw": 52.69,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_58188C34_4933_397E_41D1_320306C3BC27_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.54
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_58188C34_4933_397E_41D1_320306C3BC27_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010086_20200523111512",
  "partial": false,
  "vfov": 180
 },
 {
  "id": "panorama_58188C34_4933_397E_41D1_320306C3BC27_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.48,
   "pitch": -2.92
  }
 },
 {
  "items": [
   {
    "camera": "this.panorama_58188C34_4933_397E_41D1_320306C3BC27_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_58188C34_4933_397E_41D1_320306C3BC27",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_5E91A70F_5291_B4FD_41C8_9518B62EB8A4",
  "class": "PlayList"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5B2622EF_4933_0EEA_41BC_2858F9F8D9CC",
  "thumbnailUrl": "media/panorama_5B2622EF_4933_0EEA_41BC_2858F9F8D9CC_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5B2622EF_4933_0EEA_41BC_2858F9F8D9CC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5B2622EF_4933_0EEA_41BC_2858F9F8D9CC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5A5E9249_4915_0929_41C3_E746AF0C750B",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 11.05,
        "yaw": 169.95,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 165,
           "width": 165,
           "url": "media/panorama_5B2622EF_4933_0EEA_41BC_2858F9F8D9CC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.21
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_5B2622EF_4933_0EEA_41BC_2858F9F8D9CC_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010084_20200523111426",
  "partial": false,
  "vfov": 180
 },
 {
  "id": "panorama_5B2622EF_4933_0EEA_41BC_2858F9F8D9CC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.54,
   "pitch": -4.83
  }
 },
 {
  "items": [
   {
    "camera": "this.panorama_5B2622EF_4933_0EEA_41BC_2858F9F8D9CC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5B2622EF_4933_0EEA_41BC_2858F9F8D9CC",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_5E904710_5291_B4E3_4196_F7505E901C00",
  "class": "PlayList"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5811EC0F_493D_192A_4199_AD0B6A8E8A50",
  "thumbnailUrl": "media/panorama_5811EC0F_493D_192A_4199_AD0B6A8E8A50_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5811EC0F_493D_192A_4199_AD0B6A8E8A50_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5811EC0F_493D_192A_4199_AD0B6A8E8A50.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_5C144074_490D_09FE_4197_FB918574EEC5",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.setMediaBehaviour(this.playList_5E90C710_5291_B4E3_41C2_6F3F8972F646, 0, this.panorama_5811EC0F_493D_192A_4199_AD0B6A8E8A50)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.2,
        "yaw": -33.22,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_5811EC0F_493D_192A_4199_AD0B6A8E8A50_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.55
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_5811EC0F_493D_192A_4199_AD0B6A8E8A50_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010088_20200523111610",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.84,
   "pitch": -9.72
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5811EC0F_493D_192A_4199_AD0B6A8E8A50_camera"
 },
 {
  "items": [
   {
    "camera": "this.panorama_5811EC0F_493D_192A_4199_AD0B6A8E8A50_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5811EC0F_493D_192A_4199_AD0B6A8E8A50",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_5E906710_5291_B4E3_41A8_4120C92E84AB",
  "class": "PlayList"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_580CE4A3_493D_0919_41C2_6666CEC9BA16",
  "thumbnailUrl": "media/panorama_580CE4A3_493D_0919_41C2_6666CEC9BA16_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_580CE4A3_493D_0919_41C2_6666CEC9BA16_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_580CE4A3_493D_0919_41C2_6666CEC9BA16.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "id": "overlay_531414AF_490D_096A_41D0_A664E9F02A42",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.setMediaBehaviour(this.playList_5E904710_5291_B4E3_4196_F7505E901C00, 0, this.panorama_580CE4A3_493D_0919_41C2_6666CEC9BA16)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.2,
        "yaw": 140.12,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 288,
           "width": 287,
           "url": "media/panorama_580CE4A3_493D_0919_41C2_6666CEC9BA16_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.55
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_580CE4A3_493D_0919_41C2_6666CEC9BA16_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "label": "R0010089_20200523111635",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 129.24,
   "pitch": -15.01
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_580CE4A3_493D_0919_41C2_6666CEC9BA16_camera"
 },
 {
  "items": [
   {
    "camera": "this.panorama_580CE4A3_493D_0919_41C2_6666CEC9BA16_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_580CE4A3_493D_0919_41C2_6666CEC9BA16",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_5E90C710_5291_B4E3_41C2_6F3F8972F646",
  "class": "PlayList"
 },
 {
  "id": "camera_5E9D3724_5291_B323_41C8_CB4696F16006",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.81,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -38.37,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5E83D730_5291_B323_41CC_EFC6E2DD5052"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_5E88673B_5291_B325_41C1_24129F34E9BE",
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -163.72,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "timeToIdle": 6000,
  "id": "camera_5E88573B_5291_B325_41B8_339A26628A2F",
  "idleSequence": "this.sequence_5E88673B_5291_B325_41C1_24129F34E9BE",
  "manualRotationSpeed": 1228
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.54,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5EB21746_5291_B36F_41B9_D605D69FAEBB"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_562EF404_4477_3AC9_41C3_DC5B260F16FD",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_562EC404_4477_3AC9_41D1_1009D911D610",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_562E2404_4477_3AC9_41C8_0F91912F933A",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_562E0404_4477_3AC9_41B9_B2A66A27502B",
  "duration": 1000,
  "class": "FadeInEffect"
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "transparent",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 100,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeight": 10,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#000000",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#000000",
  "class": "ViewerArea",
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "paddingLeft": 0,
  "width": "100%",
  "height": "100%",
  "toolTipBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 15,
  "toolTipFontWeight": "bold",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "progressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "toolTipDisplayTime": 600,
  "progressBarBorderRadius": 0,
  "top": 0,
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "transitionMode": "blending",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Dubai Light",
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0
 },
 {
  "paddingLeft": 0,
  "width": "15.501%",
  "paddingRight": 0,
  "height": "18.696%",
  "maxHeight": 962,
  "url": "skin/Image_487A08A1_444F_0BCB_41CE_85736DEDE518.png",
  "paddingBottom": 0,
  "minWidth": 1,
  "maxWidth": 1246,
  "scaleMode": "fit_inside",
  "shadow": false,
  "top": "0.76%",
  "verticalAlign": "middle",
  "minHeight": 1,
  "propagateClick": false,
  "cursor": "hand",
  "horizontalAlign": "center",
  "id": "Image_487A08A1_444F_0BCB_41CE_85736DEDE518",
  "class": "Image",
  "data": {
   "name": "Image1554"
  },
  "click": "this.openLink(\"http://www.sigloxxibienesraices.com\", \"_blank\")",
  "borderSize": 0,
  "left": "0%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "iconURL": "skin/IconButton_50386FAC_444F_05D8_41D0_13E9F80FB82C.png",
  "paddingLeft": 0,
  "width": 59,
  "paddingRight": 0,
  "height": 47.05,
  "mode": "push",
  "maxHeight": 115,
  "transparencyActive": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "maxWidth": 116,
  "shadow": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "1.52%",
  "id": "IconButton_50386FAC_444F_05D8_41D0_13E9F80FB82C",
  "class": "IconButton",
  "data": {
   "name": "IconButton20493"
  },
  "horizontalAlign": "center",
  "borderSize": 0,
  "click": "this.openLink(\"http://sigloxxirealestate.com/\", \"_blank\")",
  "left": "7.72%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "iconURL": "skin/IconButton_48E587E7_4453_0548_41C1_C5CE1C0D3955.png",
  "paddingLeft": 0,
  "width": 53,
  "paddingRight": 0,
  "height": 52,
  "mode": "push",
  "maxHeight": 52,
  "transparencyActive": true,
  "paddingBottom": 0,
  "minWidth": 1,
  "maxWidth": 53,
  "shadow": false,
  "minHeight": 1,
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "1.3%",
  "id": "IconButton_48E587E7_4453_0548_41C1_C5CE1C0D3955",
  "class": "IconButton",
  "data": {
   "name": "IconButton7640"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "click": "this.shareFacebook(location.href); this.openLink(\"https://www.facebook.com/SIGLO-XXI-Bienes-Ra%C3%ADces-623743574346858\", \"_blank\")",
  "left": "0.9%",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "iconURL": "skin/IconButton_50708FC3_444D_0548_41C0_D641275588F7.png",
  "paddingLeft": 0,
  "width": 47,
  "paddingRight": 0,
  "height": 47,
  "mode": "push",
  "maxHeight": 52,
  "transparencyActive": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "maxWidth": 53,
  "shadow": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "1.53%",
  "id": "IconButton_50708FC3_444D_0548_41C0_D641275588F7",
  "class": "IconButton",
  "data": {
   "name": "IconButton19954"
  },
  "horizontalAlign": "center",
  "borderSize": 0,
  "click": "this.openLink(\"http://www.sigloxxicancun.com/ver_datos_propiedad.php?id=1062&tipo_propiedad=1&ubicacion=1&idioma=esp\", \"_blank\")",
  "left": "4.46%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "fontSize": 19,
  "paddingLeft": 0,
  "width": "24.37%",
  "paddingRight": 0,
  "textDecoration": "none",
  "fontFamily": "Dubai",
  "text": "FRACCIONAMIENTO AQUA II - FUENTE DE CISNE",
  "fontStyle": "normal",
  "paddingBottom": 0,
  "minWidth": 1,
  "shadow": false,
  "fontWeight": "normal",
  "verticalAlign": "middle",
  "minHeight": 1,
  "fontColor": "#FFFFFF",
  "propagateClick": false,
  "bottom": "1.85%",
  "id": "Label_5DD263B2_44CD_1DC8_418A_7818FC4C065E",
  "class": "Label",
  "data": {
   "name": "Label22620"
  },
  "horizontalAlign": "left",
  "borderSize": 0,
  "borderRadius": 0,
  "height": "4.348%",
  "backgroundOpacity": 0,
  "right": "0%",
  "paddingTop": 0
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "gap": 10,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "height": "100%",
 "overflow": "visible",
 "layout": "absolute",
 "paddingBottom": 0,
 "minWidth": 20,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "minHeight": 20,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "class": "Player",
 "data": {
  "name": "Player1172"
 },
 "creationPolicy": "delayed",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "existsKey": function(key){  return key in window; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; }
 },
 "paddingTop": 0
})