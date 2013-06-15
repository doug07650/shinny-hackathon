var greenMarkets = {
  "meta" : {
    "view" : {
      "id" : "zzzz-zzzz",
      "name" : "Green Market Locations",
      "attribution" : "Department of Information Technology & Telecommunications (DoITT)",
      "averageRating" : 0,
      "category" : "Environmental Sustainability",
      "description" : "Location of green markets in the city with basic descriptive information.",
      "displayType" : "map",
      "numberOfComments" : 0,
      "oid" : 0,
      "publicationAppendEnabled" : false,
      "publicationStage" : "unpublished",
      "rowClass" : "",
      "signed" : false,
      "tableId" : 244114,
      "totalTimesRated" : 0,
      "viewType" : "tabular",
      "columns" : [ {
        "id" : -1,
        "name" : "sid",
        "dataTypeName" : "meta_data",
        "fieldName" : ":sid",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "id",
        "dataTypeName" : "meta_data",
        "fieldName" : ":id",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "position",
        "dataTypeName" : "meta_data",
        "fieldName" : ":position",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "created_at",
        "dataTypeName" : "meta_data",
        "fieldName" : ":created_at",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "created_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":created_meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "updated_at",
        "dataTypeName" : "meta_data",
        "fieldName" : ":updated_at",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "updated_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":updated_meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : 2988914,
        "name" : "OBJECTID",
        "dataTypeName" : "number",
        "description" : "OBJECTID",
        "fieldName" : "objectid",
        "position" : 1,
        "renderTypeName" : "number",
        "tableColumnId" : 1564216,
        "width" : 100,
        "format" : {
        }
      }, {
        "id" : 2988915,
        "name" : "Shape",
        "dataTypeName" : "location",
        "description" : "Shape",
        "fieldName" : "shape",
        "position" : 2,
        "renderTypeName" : "location",
        "tableColumnId" : 1564217,
        "width" : 100,
        "format" : {
        },
        "subColumnTypes" : [ "human_address", "latitude", "longitude", "machine_address", "needs_recoding" ]
      }, {
        "id" : 2988916,
        "name" : "NAME",
        "dataTypeName" : "text",
        "description" : "NAME",
        "fieldName" : "name",
        "position" : 3,
        "renderTypeName" : "text",
        "tableColumnId" : 1564218,
        "width" : 100,
        "format" : {
        }
      }, {
        "id" : 2988917,
        "name" : "CITY",
        "dataTypeName" : "text",
        "description" : "CITY",
        "fieldName" : "city",
        "position" : 4,
        "renderTypeName" : "text",
        "tableColumnId" : 1564219,
        "width" : 100,
        "format" : {
        }
      }, {
        "id" : 2988918,
        "name" : "ZIP",
        "dataTypeName" : "text",
        "description" : "ZIP",
        "fieldName" : "zip",
        "position" : 5,
        "renderTypeName" : "text",
        "tableColumnId" : 1564220,
        "width" : 100,
        "format" : {
        }
      }, {
        "id" : 2988919,
        "name" : "LOCATION",
        "dataTypeName" : "text",
        "description" : "LOCATION",
        "fieldName" : "location",
        "position" : 6,
        "renderTypeName" : "text",
        "tableColumnId" : 1564221,
        "width" : 100,
        "format" : {
        }
      } ],
      "displayFormat" : {
        "bkgdLayers" : [ {
          "opacity" : 1,
          "layerKey" : "World Street Map (ESRI)"
        } ],
        "viewport" : {
          "ymin" : 40.560982146014,
          "ymax" : 40.874800049601,
          "xmin" : -74.604103103759,
          "xmax" : -72.961509720264
        },
        "distinctLegend" : true,
        "plotStyle" : "point",
        "viewDefinitions" : [ {
          "uid" : "self",
          "plot" : {
            "descriptionColumns" : [ {
              "tableColumnId" : 1564218
            } ]
          }
        } ],
        "plot" : {
          "descriptionColumns" : [ {
            "tableColumnId" : 1564218
          } ],
          "longitudeId" : 1564217,
          "latitudeId" : 1564216
        }
      },
      "grants" : [ {
        "inherited" : true,
        "type" : "viewer",
        "flags" : [ "public" ]
      } ],
      "metadata" : {
        "custom_fields" : {
          "drawingInfo.renderer" : {
            "symbol.size" : "4",
            "symbol.type" : "esriSMS",
            "symbol.yoffset" : "0",
            "symbol.xoffset" : "0",
            "symbol.angle" : "0",
            "symbol.style" : "esriSMSCircle"
          },
          "Basic" : {
            "copyrightText" : "",
            "type" : "Feature Layer",
            "definitionExpression" : "",
            "Source" : "http://nycopendata.esri.com/ArcGIS/rest/services/DOITTServices/DOITT_GREEN_MARKET_01_29JUL2009_WM/MapServer/0",
            "id" : "0",
            "minScale" : "0",
            "displayField" : "NAME",
            "htmlPopupType" : "esriServerHTMLPopupTypeAsHTMLText",
            "name" : "DOITT_GREEN_MARKET_01_29JUL2009",
            "currentVersion" : "10.02",
            "hasAttachments" : "false",
            "capabilities" : "Map,Query,Data",
            "Spatial Reference wkid" : "102100",
            "maxScale" : "0",
            "defaultVisibility" : "true",
            "geometryType" : "esriGeometryPoint"
          },
          "Update" : {
            "Update Frequency" : "As needed"
          },
          "drawingInfo.renderer.symbol" : {
            "outline.width" : "1"
          },
          "drawingInfo" : {
            "transparency" : "0",
            "renderer.description" : "",
            "renderer.type" : "simple",
            "renderer.label" : ""
          }
        },
        "renderTypeConfig" : {
          "visible" : {
            "map" : true
          }
        },
        "availableDisplayTypes" : [ "map", "table", "fatrow", "page" ],
        "rdfSubject" : "0",
        "attachments" : [ {
          "blobId" : "B1741353-BC93-4569-81A6-31373AED34B3",
          "name" : "DOITT_GREEN_MARKET.zip",
          "filename" : "DOITT_GREEN_MARKET.zip"
        } ],
        "rowIdentifier" : "0",
        "rdfClass" : ""
      },
      "query" : {
      },
      "rights" : [ "read" ],
      "tableAuthor" : {
        "id" : "5fuc-pqz2",
        "displayName" : "NYC OpenData",
        "emailUnsubscribed" : false,
        "privacyControl" : "login",
        "profileLastModified" : 1331656907,
        "roleName" : "administrator",
        "screenName" : "NYC OpenData",
        "rights" : [ "create_datasets", "edit_others_datasets", "edit_sdp", "edit_site_theme", "moderate_comments", "manage_users", "chown_datasets", "edit_nominations", "approve_nominations", "feature_items", "federations", "manage_stories", "manage_approval", "change_configurations", "view_domain", "view_others_datasets", "edit_pages", "create_pages", "short_session" ]
      },
      "tags" : [ "doitt gis", "geographic", "location", "map", "cartography", "business", "green", "market", "grocer", "food", "sale", "sell" ],
      "flags" : [ "unsaved" ]
    }
  },
  "data" : [ [ 1, "1", null, null, null, 0, null, null, "1", [ null, "40.70496936300009", "-74.01365504499995", null, false, {
    "point" : [ -74.01365504499995, 40.70496936300009 ]
  } ], "Bowling Green", "Manhattan", null, "Broadway & Battery Place" ]
, [ 2, "2", null, null, null, 0, null, null, "2", [ null, "40.70132845100005", "-74.01318551599991", null, false, {
    "point" : [ -74.01318551599991, 40.70132845100005 ]
  } ], "Staten Island Ferry/Whitehall", "Manhattan", null, "Inside Terminal Building" ]
, [ 3, "3", null, null, null, 0, null, null, "3", [ null, "40.709189681000055", "-74.01125284699992", null, false, {
    "point" : [ -74.01125284699992, 40.709189681000055 ]
  } ], "Zuccotti Park", "Manhattan", null, "Cedar Street & Broadway" ]
, [ 4, "4", null, null, null, 0, null, null, "4", [ null, "40.713830048000034", "-74.00642610799991", null, false, {
    "point" : [ -74.00642610799991, 40.713830048000034 ]
  } ], "City Hall Park", "Manhattan", null, "Broadway & Chambers Street" ]
, [ 5, "5", null, null, null, 0, null, null, "5", [ null, "40.716516788000035", "-74.01106926999995", null, false, {
    "point" : [ -74.01106926999995, 40.716516788000035 ]
  } ], "Tribeca", "Manhattan", null, "Greenwich Street & Chambers Street" ]
, [ 6, "6", null, null, null, 0, null, null, "6", [ null, "40.716445717000056", "-73.98836462299994", null, false, {
    "point" : [ -73.98836462299994, 40.716445717000056 ]
  } ], "LES / Grand Street", "Manhattan", null, "Norfolk Street & Grand Street" ]
, [ 7, "7", null, null, null, 0, null, null, "7", [ null, "40.72610211600005", "-73.98324173199995", null, false, {
    "point" : [ -73.98324173199995, 40.72610211600005 ]
  } ], "Tompkins Square", "Manhattan", null, "East 7 Street & Avenue A" ]
, [ 8, "8", null, null, null, 0, null, null, "8", [ null, "40.73000713300007", "-73.98693876499993", null, false, {
    "point" : [ -73.98693876499993, 40.73000713300007 ]
  } ], "St. Mark's Church", "Manhattan", null, "E 10 Street & 2 Avenue" ]
, [ 9, "9", null, null, null, 0, null, null, "9", [ null, "40.73175366300006", "-73.97787418199994", null, false, {
    "point" : [ -73.97787418199994, 40.73175366300006 ]
  } ], "Stuyvesant Town", "Manhattan", null, "Stuy-Town Oval 14 St Loop & Avenue A" ]
, [ 10, "10", null, null, null, 0, null, null, "10", [ null, "40.73733623800007", "-74.0054487939999", null, false, {
    "point" : [ -74.0054487939999, 40.73733623800007 ]
  } ], "Abingdon Square", "Manhattan", null, "W 12 Street & 8 Avenue/Hudson Street" ]
, [ 11, "11", null, null, null, 0, null, null, "11", [ null, "40.73667719200006", "-73.98999380399994", null, false, {
    "point" : [ -73.98999380399994, 40.73667719200006 ]
  } ], "Union Square", "Manhattan", null, "E 17 Street & Broadway" ]
, [ 12, "12", null, null, null, 0, null, null, "12", [ null, "40.74371179900004", "-73.97649143599995", null, false, {
    "point" : [ -73.97649143599995, 40.74371179900004 ]
  } ], "Murray Hill", "Manhattan", null, "2 Avenue & 33 Street" ]
, [ 13, "13", null, null, null, 0, null, null, "13", [ null, "40.75231908300009", "-73.96883343399992", null, false, {
    "point" : [ -73.96883343399992, 40.75231908300009 ]
  } ], "Dag Hammarskjold Plaza", "Manhattan", null, "E 47 Street & 2 Avenue" ]
, [ 14, "14", null, null, null, 0, null, null, "14", [ null, "40.75906452500004", "-73.97845038899993", null, false, {
    "point" : [ -73.97845038899993, 40.75906452500004 ]
  } ], "Rockefeller Center", "Manhattan", null, "Rockefeller Plaza - 50 Street" ]
, [ 15, "15", null, null, null, 0, null, null, "15", [ null, "40.76769461500004", "-73.98561503099995", null, false, {
    "point" : [ -73.98561503099995, 40.76769461500004 ]
  } ], "57th Street", "Manhattan", null, "W 57 Street & 9 Avenue" ]
, [ 16, "16", null, null, null, 0, null, null, "16", [ null, "40.77352716000007", "-73.98190089499991", null, false, {
    "point" : [ -73.98190089499991, 40.77352716000007 ]
  } ], "Tucker Square", "Manhattan", null, "W 66 Street & Columbus Avenue" ]
, [ 17, "17", null, null, null, 0, null, null, "17", [ null, "40.78119419700005", "-73.97579896199994", null, false, {
    "point" : [ -73.97579896199994, 40.78119419700005 ]
  } ], "77th Street", "Manhattan", null, "Columbus Avenue between 77 Street & 79 Street" ]
, [ 18, "18", null, null, null, 0, null, null, "18", [ null, "40.773852426000076", "-73.95037316699995", null, false, {
    "point" : [ -73.95037316699995, 40.773852426000076 ]
  } ], "82nd Street / St Stephens", "Manhattan", null, "E 82 Street - 1st Avenue & York Avenue" ]
, [ 19, "19", null, null, null, 0, null, null, "19", [ null, "40.781003748000046", "-73.94637903199992", null, false, {
    "point" : [ -73.94637903199992, 40.781003748000046 ]
  } ], "92nd Street", "Manhattan", null, "1st Avenue - 92 Street & 93 Street" ]
, [ 20, "20", null, null, null, 0, null, null, "20", [ null, "40.79353966800005", "-73.96702119799994", null, false, {
    "point" : [ -73.96702119799994, 40.79353966800005 ]
  } ], "97th Street", "Manhattan", null, "W 97 Street & Columbus Avenue" ]
, [ 21, "21", null, null, null, 0, null, null, "21", [ null, "40.788836926000045", "-73.95193768299993", null, false, {
    "point" : [ -73.95193768299993, 40.788836926000045 ]
  } ], "Mt Sinai Hospital", "Manhattan", null, "E 99 Street - Madison Avenue & Park Avenue" ]
, [ 22, "22", null, null, null, 0, null, null, "22", [ null, "40.79796756600007", "-73.95983785399994", null, false, {
    "point" : [ -73.95983785399994, 40.79796756600007 ]
  } ], "Stranger's Gate", "Manhattan", null, "W 106 Street & Central Park West" ]
, [ 23, "23", null, null, null, 0, null, null, "23", [ null, "40.807022601000085", "-73.96463967499994", null, false, {
    "point" : [ -73.96463967499994, 40.807022601000085 ]
  } ], "Columbia", "Manhattan", null, "Broadway - 114 Street & 115 Street" ]
, [ 24, "24", null, null, null, 0, null, null, "24", [ null, "40.81354159500006", "-73.93928138799993", null, false, {
    "point" : [ -73.93928138799993, 40.81354159500006 ]
  } ], "Harlem Hospital", "Manhattan", null, "Lenox Avenue - W 136th Street & W 137th Street" ]
, [ 25, "25", null, null, null, 0, null, null, "25", [ null, "40.84621102600005", "-73.93844219199991", null, false, {
    "point" : [ -73.93844219199991, 40.84621102600005 ]
  } ], "175th Street", "Manhattan", null, "W 175 Street & Broadway" ]
, [ 26, "26", null, null, null, 0, null, null, "26", [ null, "40.869462540000086", "-73.9204888559999", null, false, {
    "point" : [ -73.9204888559999, 40.869462540000086 ]
  } ], "Inwood", "Manhattan", null, "Isham Street - Seaman Street & Cooper Street" ]
, [ 27, "27", null, null, null, 0, null, null, "27", [ null, "40.864426955000056", "-73.89490119999994", null, false, {
    "point" : [ -73.89490119999994, 40.864426955000056 ]
  } ], "Poe Park", "Bronx", null, "Grand Concourse & E 192 Street" ]
, [ 28, "28", null, null, null, 0, null, null, "28", [ null, "40.82450494300008", "-73.92424000199992", null, false, {
    "point" : [ -73.92424000199992, 40.82450494300008 ]
  } ], "Bronx Borough Hall", "Bronx", null, "Grand Concourse & E 156 Street" ]
, [ 29, "29", null, null, null, 0, null, null, "29", [ null, "40.817331282000055", "-73.92299534999995", null, false, {
    "point" : [ -73.92299534999995, 40.817331282000055 ]
  } ], "Lincoln Hospital", "Bronx", null, "E 149 Street & Morris Avenue" ]
, [ 30, "30", null, null, null, 0, null, null, "30", [ null, "40.767933569000036", "-73.93242282299991", null, false, {
    "point" : [ -73.93242282299991, 40.767933569000036 ]
  } ], "Astoria", "Queens", null, "14 Street - 31 Avenue & 31 Road" ]
, [ 31, "31", null, null, null, 0, null, null, "31", [ null, "40.753304203000084", "-73.88922217299995", null, false, {
    "point" : [ -73.88922217299995, 40.753304203000084 ]
  } ], "Jackson Heights", "Queens", null, "34th Avenue - 77 Street & 78 Street" ]
, [ 32, "32", null, null, null, 0, null, null, "32", [ null, "40.74396253800006", "-73.95388934399995", null, false, {
    "point" : [ -73.95388934399995, 40.74396253800006 ]
  } ], "Long Island City", "Queens", null, "48th Avenue & Vernon Blvd" ]
, [ 33, "33", null, null, null, 0, null, null, "33", [ null, "40.74725999600008", "-73.92126558399991", null, false, {
    "point" : [ -73.92126558399991, 40.74725999600008 ]
  } ], "Sunnyside", "Queens", null, "Skillman Avenue - 42 Street & 43 Street" ]
, [ 34, "34", null, null, null, 0, null, null, "34", [ null, "40.70861076700004", "-73.86857627499995", null, false, {
    "point" : [ -73.86857627499995, 40.70861076700004 ]
  } ], "Atlas Park/Glendale", "Queens", null, "Cooper Avenue & 80 Street" ]
, [ 35, "35", null, null, null, 0, null, null, "35", [ null, "40.72276579800007", "-73.95176577199993", null, false, {
    "point" : [ -73.95176577199993, 40.72276579800007 ]
  } ], "Greenpoint - McCarren Park", "Brooklyn", null, "Bedford Avenue & Lorimer Street" ]
, [ 36, "36", null, null, null, 0, null, null, "36", [ null, "40.70824485800006", "-73.95966202699992", null, false, {
    "point" : [ -73.95966202699992, 40.70824485800006 ]
  } ], "Williamsburg", "Brooklyn", null, "Havemeyer Street & Broadway" ]
, [ 37, "37", null, null, null, 0, null, null, "37", [ null, "40.68980066000006", "-73.9733908419999", null, false, {
    "point" : [ -73.9733908419999, 40.68980066000006 ]
  } ], "Fort Greene Park", "Brooklyn", null, "Washington Park & DeKalb Avenue" ]
, [ 38, "38", null, null, null, 0, null, null, "38", [ null, "40.69307943200005", "-73.99026358999993", null, false, {
    "point" : [ -73.99026358999993, 40.69307943200005 ]
  } ], "Brooklyn Borough Hall", "Brooklyn", null, "Court Street & Montague Street" ]
, [ 39, "39", null, null, null, 0, null, null, "39", [ null, "40.68088140700007", "-73.99563888599994", null, false, {
    "point" : [ -73.99563888599994, 40.68088140700007 ]
  } ], "Carroll Gardens", "Brooklyn", null, "Carroll Street between Smith & Court Street" ]
, [ 40, "40", null, null, null, 0, null, null, "40", [ null, "40.672270139000034", "-73.97016831399992", null, false, {
    "point" : [ -73.97016831399992, 40.672270139000034 ]
  } ], "Grand Army Plaza", "Brooklyn", null, "NW entrance Prospect Park" ]
, [ 41, "41", null, null, null, 0, null, null, "41", [ null, "40.661153667000065", "-73.98017246099994", null, false, {
    "point" : [ -73.98017246099994, 40.661153667000065 ]
  } ], "Windsor Terrace", "Brooklyn", null, "Prospect Park W & 15 Street" ]
, [ 42, "42", null, null, null, 0, null, null, "42", [ null, "40.64089044600007", "-73.96569709399995", null, false, {
    "point" : [ -73.96569709399995, 40.64089044600007 ]
  } ], "Cortelyou", "Brooklyn", null, "Courtelyou Road & Rugby Road" ]
, [ 43, "43", null, null, null, 0, null, null, "43", [ null, "40.63338325400008", "-73.99040200199994", null, false, {
    "point" : [ -73.99040200199994, 40.63338325400008 ]
  } ], "Borough Park", "Brooklyn", null, "14th Avenue - 49 Street & 50 Street" ]
, [ 44, "44", null, null, null, 0, null, null, "44", [ null, "40.641122522000046", "-74.01814246399994", null, false, {
    "point" : [ -74.01814246399994, 40.641122522000046 ]
  } ], "Sunset Park", "Brooklyn", null, "4th Avenue - 59 Street & 60 Street" ]
, [ 45, "45", null, null, null, 0, null, null, "45", [ null, "40.641333977000045", "-74.07736966399995", null, false, {
    "point" : [ -74.07736966399995, 40.641333977000045 ]
  } ], "St. George", "Staten Island", null, "Boro Hall park lot, St. Mark's Place & Hyatt Street" ]
, [ 46, "46", null, null, null, 0, null, null, "46", [ null, "40.61724073400006", "-74.03360756099994", null, false, {
    "point" : [ -74.03360756099994, 40.61724073400006 ]
  } ], "Bay Ridge", "Brooklyn", null, "3rd Avenue & 95th Street" ]
 ]
}
