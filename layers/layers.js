ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-73.635784, -36.364408, -69.893840, -34.194974]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BDMarket_1 = new ol.format.GeoJSON();
var features_BDMarket_1 = format_BDMarket_1.readFeatures(json_BDMarket_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BDMarket_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDMarket_1.addFeatures(features_BDMarket_1);
var lyr_BDMarket_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDMarket_1, 
                style: style_BDMarket_1,
                interactive: true,
    title: 'BDMarket<br />\
    <img src="styles/legend/BDMarket_1_0.png" /> 1<br />\
    <img src="styles/legend/BDMarket_1_1.png" /> 2<br />\
    <img src="styles/legend/BDMarket_1_2.png" /> 3<br />\
    <img src="styles/legend/BDMarket_1_3.png" /> 4<br />\
    <img src="styles/legend/BDMarket_1_4.png" /> 5<br />\
    <img src="styles/legend/BDMarket_1_5.png" /> 6<br />\
    <img src="styles/legend/BDMarket_1_6.png" /> 7<br />\
    <img src="styles/legend/BDMarket_1_7.png" /> 8<br />\
    <img src="styles/legend/BDMarket_1_8.png" /> 9<br />\
    <img src="styles/legend/BDMarket_1_9.png" /> 10<br />\
    <img src="styles/legend/BDMarket_1_10.png" /> 11<br />\
    <img src="styles/legend/BDMarket_1_11.png" /> 12<br />\
    <img src="styles/legend/BDMarket_1_12.png" /> 13<br />\
    <img src="styles/legend/BDMarket_1_13.png" /> 14<br />\
    <img src="styles/legend/BDMarket_1_14.png" /> 15<br />\
    <img src="styles/legend/BDMarket_1_15.png" /> 16<br />\
    <img src="styles/legend/BDMarket_1_16.png" /> 17<br />\
    <img src="styles/legend/BDMarket_1_17.png" /> 18<br />\
    <img src="styles/legend/BDMarket_1_18.png" /> 19<br />\
    <img src="styles/legend/BDMarket_1_19.png" /> 20<br />\
    <img src="styles/legend/BDMarket_1_20.png" /> 21<br />\
    <img src="styles/legend/BDMarket_1_21.png" /> 22<br />\
    <img src="styles/legend/BDMarket_1_22.png" /> 23<br />\
    <img src="styles/legend/BDMarket_1_23.png" /> 24<br />\
    <img src="styles/legend/BDMarket_1_24.png" /> 25<br />\
    <img src="styles/legend/BDMarket_1_25.png" /> 26<br />\
    <img src="styles/legend/BDMarket_1_26.png" /> 27<br />\
    <img src="styles/legend/BDMarket_1_27.png" /> 28<br />\
    <img src="styles/legend/BDMarket_1_28.png" /> 29<br />\
    <img src="styles/legend/BDMarket_1_29.png" /> 30<br />\
    <img src="styles/legend/BDMarket_1_30.png" /> <br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_BDMarket_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_BDMarket_1];
lyr_BDMarket_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'NOMBRE DE': 'NOMBRE DE', 'ACTIVA': 'ACTIVA', 'INICIACI��': 'INICIACI��', 'NOMBRE D_1': 'NOMBRE D_1', 'CORREO ELE': 'CORREO ELE', 'N�MMERO': 'N�MMERO', 'DIRECCI�': 'DIRECCI�', 'DISTRITO': 'DISTRITO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'Este (X)': 'Este (X)', 'Norte (Y)': 'Norte (Y)', });
lyr_BDMarket_1.set('fieldImages', {'NOMBRE': 'TextEdit', 'NOMBRE DE': 'TextEdit', 'ACTIVA': 'TextEdit', 'INICIACI��': 'TextEdit', 'NOMBRE D_1': 'TextEdit', 'CORREO ELE': 'TextEdit', 'N�MMERO': 'TextEdit', 'DIRECCI�': 'TextEdit', 'DISTRITO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'Este (X)': 'TextEdit', 'Norte (Y)': 'TextEdit', });
lyr_BDMarket_1.set('fieldLabels', {'NOMBRE': 'no label', 'NOMBRE DE': 'no label', 'ACTIVA': 'no label', 'INICIACI��': 'no label', 'NOMBRE D_1': 'no label', 'CORREO ELE': 'no label', 'N�MMERO': 'no label', 'DIRECCI�': 'no label', 'DISTRITO': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'Este (X)': 'no label', 'Norte (Y)': 'no label', });
lyr_BDMarket_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});