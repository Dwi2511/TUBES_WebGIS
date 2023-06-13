var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdnimistrasiDesa_2 = new ol.format.GeoJSON();
var features_BatasAdnimistrasiDesa_2 = format_BatasAdnimistrasiDesa_2.readFeatures(json_BatasAdnimistrasiDesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdnimistrasiDesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdnimistrasiDesa_2.addFeatures(features_BatasAdnimistrasiDesa_2);
var lyr_BatasAdnimistrasiDesa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdnimistrasiDesa_2, 
                style: style_BatasAdnimistrasiDesa_2,
                interactive: true,
                title: '<img src="styles/legend/BatasAdnimistrasiDesa_2.png" /> Batas Adnimistrasi Desa'
            });
var format_BatasAdministrasiKecamatan_3 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_3 = format_BatasAdministrasiKecamatan_3.readFeatures(json_BatasAdministrasiKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_3.addFeatures(features_BatasAdministrasiKecamatan_3);
var lyr_BatasAdministrasiKecamatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasiKecamatan_3, 
                style: style_BatasAdministrasiKecamatan_3,
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_3.png" /> Batas Administrasi Kecamatan'
            });
var format_BatasAdministrasiKabupaten_4 = new ol.format.GeoJSON();
var features_BatasAdministrasiKabupaten_4 = format_BatasAdministrasiKabupaten_4.readFeatures(json_BatasAdministrasiKabupaten_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKabupaten_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKabupaten_4.addFeatures(features_BatasAdministrasiKabupaten_4);
var lyr_BatasAdministrasiKabupaten_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasiKabupaten_4, 
                style: style_BatasAdministrasiKabupaten_4,
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKabupaten_4.png" /> Batas Administrasi Kabupaten'
            });
var format_Sungai_5 = new ol.format.GeoJSON();
var features_Sungai_5 = format_Sungai_5.readFeatures(json_Sungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_5.addFeatures(features_Sungai_5);
var lyr_Sungai_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_5, 
                style: style_Sungai_5,
                interactive: true,
                title: '<img src="styles/legend/Sungai_5.png" /> Sungai'
            });
var format_GarisKontur_6 = new ol.format.GeoJSON();
var features_GarisKontur_6 = format_GarisKontur_6.readFeatures(json_GarisKontur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarisKontur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarisKontur_6.addFeatures(features_GarisKontur_6);
var lyr_GarisKontur_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GarisKontur_6, 
                style: style_GarisKontur_6,
                interactive: true,
                title: '<img src="styles/legend/GarisKontur_6.png" /> Garis Kontur'
            });
var format_Pemukiman_7 = new ol.format.GeoJSON();
var features_Pemukiman_7 = format_Pemukiman_7.readFeatures(json_Pemukiman_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_7.addFeatures(features_Pemukiman_7);
var lyr_Pemukiman_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemukiman_7, 
                style: style_Pemukiman_7,
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_7.png" /> Pemukiman'
            });
var format_Jalan_8 = new ol.format.GeoJSON();
var features_Jalan_8 = format_Jalan_8.readFeatures(json_Jalan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_8.addFeatures(features_Jalan_8);
var lyr_Jalan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_8, 
                style: style_Jalan_8,
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_8_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_8_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_8_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_8_3.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_8_4.png" /> <br />'
        });
var format_Waduk_9 = new ol.format.GeoJSON();
var features_Waduk_9 = format_Waduk_9.readFeatures(json_Waduk_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waduk_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waduk_9.addFeatures(features_Waduk_9);
var lyr_Waduk_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Waduk_9, 
                style: style_Waduk_9,
                interactive: true,
                title: '<img src="styles/legend/Waduk_9.png" /> Waduk'
            });
var format_KantorPolisi_10 = new ol.format.GeoJSON();
var features_KantorPolisi_10 = format_KantorPolisi_10.readFeatures(json_KantorPolisi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorPolisi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorPolisi_10.addFeatures(features_KantorPolisi_10);
var lyr_KantorPolisi_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorPolisi_10, 
                style: style_KantorPolisi_10,
                interactive: true,
                title: '<img src="styles/legend/KantorPolisi_10.png" /> Kantor Polisi'
            });
var format_KantorCamat_11 = new ol.format.GeoJSON();
var features_KantorCamat_11 = format_KantorCamat_11.readFeatures(json_KantorCamat_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorCamat_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorCamat_11.addFeatures(features_KantorCamat_11);
var lyr_KantorCamat_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorCamat_11, 
                style: style_KantorCamat_11,
                interactive: true,
                title: '<img src="styles/legend/KantorCamat_11.png" /> Kantor Camat'
            });
var format_KantorBapati_12 = new ol.format.GeoJSON();
var features_KantorBapati_12 = format_KantorBapati_12.readFeatures(json_KantorBapati_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorBapati_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorBapati_12.addFeatures(features_KantorBapati_12);
var lyr_KantorBapati_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorBapati_12, 
                style: style_KantorBapati_12,
                interactive: true,
                title: '<img src="styles/legend/KantorBapati_12.png" /> Kantor Bapati'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_BatasAdnimistrasiDesa_2.setVisible(true);lyr_BatasAdministrasiKecamatan_3.setVisible(true);lyr_BatasAdministrasiKabupaten_4.setVisible(true);lyr_Sungai_5.setVisible(true);lyr_GarisKontur_6.setVisible(true);lyr_Pemukiman_7.setVisible(true);lyr_Jalan_8.setVisible(true);lyr_Waduk_9.setVisible(true);lyr_KantorPolisi_10.setVisible(true);lyr_KantorCamat_11.setVisible(true);lyr_KantorBapati_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_BatasAdnimistrasiDesa_2,lyr_BatasAdministrasiKecamatan_3,lyr_BatasAdministrasiKabupaten_4,lyr_Sungai_5,lyr_GarisKontur_6,lyr_Pemukiman_7,lyr_Jalan_8,lyr_Waduk_9,lyr_KantorPolisi_10,lyr_KantorCamat_11,lyr_KantorBapati_12];
lyr_BatasAdnimistrasiDesa_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiKecamatan_3.set('fieldAliases', {'GID_3': 'GID_3', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', });
lyr_BatasAdministrasiKabupaten_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sungai_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_GarisKontur_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VALKNT': 'VALKNT', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Pemukiman_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Jalan_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Waduk_9.set('fieldAliases', {'Field1': 'Field1', 'Field2': 'Field2', 'lokasi': 'lokasi', });
lyr_KantorPolisi_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_KantorCamat_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_KantorBapati_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_BatasAdnimistrasiDesa_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_3.set('fieldImages', {'GID_3': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', });
lyr_BatasAdministrasiKabupaten_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Sungai_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_GarisKontur_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'VALKNT': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Pemukiman_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jalan_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Waduk_9.set('fieldImages', {'Field1': 'TextEdit', 'Field2': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_KantorPolisi_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_KantorCamat_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_KantorBapati_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_BatasAdnimistrasiDesa_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiKecamatan_3.set('fieldLabels', {'GID_3': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', });
lyr_BatasAdministrasiKabupaten_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sungai_5.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_GarisKontur_6.set('fieldLabels', {'OBJECTID': 'no label', 'VALKNT': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Pemukiman_7.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Jalan_8.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Waduk_9.set('fieldLabels', {'Field1': 'no label', 'Field2': 'no label', 'lokasi': 'no label', });
lyr_KantorPolisi_10.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', });
lyr_KantorCamat_11.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', });
lyr_KantorBapati_12.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', });
lyr_KantorBapati_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});