var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleEarth_1 = new ol.layer.Tile({
            'title': 'Google Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_CityandMunicipalBoundariesofRegionX_2 = new ol.format.GeoJSON();
var features_CityandMunicipalBoundariesofRegionX_2 = format_CityandMunicipalBoundariesofRegionX_2.readFeatures(json_CityandMunicipalBoundariesofRegionX_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityandMunicipalBoundariesofRegionX_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityandMunicipalBoundariesofRegionX_2.addFeatures(features_CityandMunicipalBoundariesofRegionX_2);
var lyr_CityandMunicipalBoundariesofRegionX_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityandMunicipalBoundariesofRegionX_2, 
                style: style_CityandMunicipalBoundariesofRegionX_2,
                popuplayertitle: 'City and Municipal Boundaries of Region X',
                interactive: true,
                title: '<img src="styles/legend/CityandMunicipalBoundariesofRegionX_2.png" /> City and Municipal Boundaries of Region X'
            });
var format_SmallWaterImpoundingProject_3 = new ol.format.GeoJSON();
var features_SmallWaterImpoundingProject_3 = format_SmallWaterImpoundingProject_3.readFeatures(json_SmallWaterImpoundingProject_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmallWaterImpoundingProject_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmallWaterImpoundingProject_3.addFeatures(features_SmallWaterImpoundingProject_3);
var lyr_SmallWaterImpoundingProject_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmallWaterImpoundingProject_3, 
                style: style_SmallWaterImpoundingProject_3,
                popuplayertitle: 'Small Water Impounding Project',
                interactive: true,
                title: '<img src="styles/legend/SmallWaterImpoundingProject_3.png" /> Small Water Impounding Project'
            });
var format_PumpandEngineSets_4 = new ol.format.GeoJSON();
var features_PumpandEngineSets_4 = format_PumpandEngineSets_4.readFeatures(json_PumpandEngineSets_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PumpandEngineSets_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PumpandEngineSets_4.addFeatures(features_PumpandEngineSets_4);
var lyr_PumpandEngineSets_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PumpandEngineSets_4, 
                style: style_PumpandEngineSets_4,
                popuplayertitle: 'Pump and Engine Sets',
                interactive: true,
                title: '<img src="styles/legend/PumpandEngineSets_4.png" /> Pump and Engine Sets'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleEarth_1.setVisible(true);lyr_CityandMunicipalBoundariesofRegionX_2.setVisible(true);lyr_SmallWaterImpoundingProject_3.setVisible(true);lyr_PumpandEngineSets_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleEarth_1,lyr_CityandMunicipalBoundariesofRegionX_2,lyr_SmallWaterImpoundingProject_3,lyr_PumpandEngineSets_4];
lyr_CityandMunicipalBoundariesofRegionX_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_SmallWaterImpoundingProject_3.set('fieldAliases', {'Project Name': 'Project Name', 'TYPE OF SSIP': 'TYPE OF SSIP', 'PROVINCE': 'PROVINCE', 'CITY/MUNICIPALITIES': 'CITY/MUNICIPALITIES', 'BARANGAY': 'BARANGAY', 'LATITUDE (DEG)': 'LATITUDE (DEG)', 'LONGITUDE (DEG)': 'LONGITUDE (DEG)', 'FUNDING SOURCE': 'FUNDING SOURCE', 'YEAR CONSTRUCTED': 'YEAR CONSTRUCTED', 'PROJECT COST (P\'000)': 'PROJECT COST (P\'000)', 'YEAR REHABILITATED & FUNDING SOURCE': 'YEAR REHABILITATED & FUNDING SOURCE', 'PROJECT REHABILITATION  COST': 'PROJECT REHABILITATION  COST', 'REPORTED NO. OF FARMER BENEFICIARIES': 'REPORTED NO. OF FARMER BENEFICIARIES', 'REPORTED SERVICE AREA (HA)': 'REPORTED SERVICE AREA (HA)', 'PRESENT SERVICE AREA HA (WET)': 'PRESENT SERVICE AREA HA (WET)', 'PRESENT SERVICE AREA HA (DRY)': 'PRESENT SERVICE AREA HA (DRY)', 'PRESENT NO. OF FARMER BENEFICIARIES': 'PRESENT NO. OF FARMER BENEFICIARIES', 'STATUS OF SSIPS': 'STATUS OF SSIPS', 'REMARKS': 'REMARKS', 'DATE UPDATED': 'DATE UPDATED', 'NAME OF ASSOCIATION': 'NAME OF ASSOCIATION', 'STATUS OF ASSOCIATION': 'STATUS OF ASSOCIATION', 'PRESIDENT': 'PRESIDENT', 'CONTACT NUMBER': 'CONTACT NUMBER', 'field_25': 'field_25', });
lyr_PumpandEngineSets_4.set('fieldAliases', {'Index': 'Index', 'Prexc Program': 'Prexc Program', 'Sub Program': 'Sub Program', 'Machine ID': 'Machine ID', 'Machine Name': 'Machine Name', 'Farm Operation': 'Farm Operation', 'Year Funded': 'Year Funded', 'Fund Source': 'Fund Source', 'Fundsource Agency': 'Fundsource Agency', 'Banner Program': 'Banner Program', 'Bidded Cost': 'Bidded Cost', 'Rated Power': 'Rated Power', 'Brand': 'Brand', 'Supplier': 'Supplier', 'Capacity': 'Capacity', 'Serial Number': 'Serial Number', 'Service Area': 'Service Area', 'Beneficiary': 'Beneficiary', 'Beneficiary Representative': 'Beneficiary Representative', 'Beneficiary Birthdate': 'Beneficiary Birthdate', 'Recipient Type': 'Recipient Type', 'Date Turned-over': 'Date Turned-over', 'Stage': 'Stage', 'Status': 'Status', 'Client Feedback': 'Client Feedback', 'Region': 'Region', 'Province': 'Province', 'District': 'District', 'Municipality': 'Municipality', 'Barangay': 'Barangay', 'Description': 'Description', 'Document': 'Document', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Date Move To Inventory': 'Date Move To Inventory', 'Indicator Level 3': 'Indicator Level 3', 'Operating Unit': 'Operating Unit', 'Author': 'Author', });
lyr_CityandMunicipalBoundariesofRegionX_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'TextEdit', 'validOn': 'TextEdit', 'validTo': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA_SQKM': 'TextEdit', });
lyr_SmallWaterImpoundingProject_3.set('fieldImages', {'Project Name': 'TextEdit', 'TYPE OF SSIP': 'TextEdit', 'PROVINCE': 'TextEdit', 'CITY/MUNICIPALITIES': 'TextEdit', 'BARANGAY': 'TextEdit', 'LATITUDE (DEG)': 'TextEdit', 'LONGITUDE (DEG)': 'TextEdit', 'FUNDING SOURCE': 'TextEdit', 'YEAR CONSTRUCTED': 'Range', 'PROJECT COST (P\'000)': 'TextEdit', 'YEAR REHABILITATED & FUNDING SOURCE': 'TextEdit', 'PROJECT REHABILITATION  COST': 'TextEdit', 'REPORTED NO. OF FARMER BENEFICIARIES': 'Range', 'REPORTED SERVICE AREA (HA)': 'Range', 'PRESENT SERVICE AREA HA (WET)': 'Range', 'PRESENT SERVICE AREA HA (DRY)': 'Range', 'PRESENT NO. OF FARMER BENEFICIARIES': 'Range', 'STATUS OF SSIPS': 'TextEdit', 'REMARKS': 'TextEdit', 'DATE UPDATED': 'TextEdit', 'NAME OF ASSOCIATION': 'TextEdit', 'STATUS OF ASSOCIATION': 'TextEdit', 'PRESIDENT': 'TextEdit', 'CONTACT NUMBER': 'TextEdit', 'field_25': 'TextEdit', });
lyr_PumpandEngineSets_4.set('fieldImages', {'Index': 'Range', 'Prexc Program': 'TextEdit', 'Sub Program': 'TextEdit', 'Machine ID': 'TextEdit', 'Machine Name': 'TextEdit', 'Farm Operation': 'TextEdit', 'Year Funded': 'Range', 'Fund Source': 'TextEdit', 'Fundsource Agency': 'TextEdit', 'Banner Program': 'TextEdit', 'Bidded Cost': 'TextEdit', 'Rated Power': 'TextEdit', 'Brand': 'TextEdit', 'Supplier': 'TextEdit', 'Capacity': 'TextEdit', 'Serial Number': 'TextEdit', 'Service Area': 'Range', 'Beneficiary': 'TextEdit', 'Beneficiary Representative': 'TextEdit', 'Beneficiary Birthdate': 'TextEdit', 'Recipient Type': 'TextEdit', 'Date Turned-over': 'TextEdit', 'Stage': 'TextEdit', 'Status': 'TextEdit', 'Client Feedback': 'TextEdit', 'Region': 'TextEdit', 'Province': 'TextEdit', 'District': 'TextEdit', 'Municipality': 'TextEdit', 'Barangay': 'TextEdit', 'Description': 'TextEdit', 'Document': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Date Move To Inventory': 'TextEdit', 'Indicator Level 3': 'TextEdit', 'Operating Unit': 'TextEdit', 'Author': 'TextEdit', });
lyr_CityandMunicipalBoundariesofRegionX_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMode': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', 'ADM3_EN': 'inline label - visible with data', 'ADM3_PCODE': 'inline label - visible with data', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'inline label - visible with data', 'ADM1_EN': 'inline label - visible with data', 'ADM1_PCODE': 'inline label - visible with data', 'ADM0_EN': 'inline label - visible with data', 'ADM0_PCODE': 'inline label - visible with data', 'date': 'inline label - visible with data', 'validOn': 'inline label - visible with data', 'validTo': 'inline label - visible with data', 'ADM3_REF': 'inline label - visible with data', 'ADM3ALT1EN': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'AREA_SQKM': 'inline label - visible with data', });
lyr_SmallWaterImpoundingProject_3.set('fieldLabels', {'Project Name': 'inline label - visible with data', 'TYPE OF SSIP': 'inline label - visible with data', 'PROVINCE': 'inline label - visible with data', 'CITY/MUNICIPALITIES': 'inline label - visible with data', 'BARANGAY': 'inline label - visible with data', 'LATITUDE (DEG)': 'inline label - visible with data', 'LONGITUDE (DEG)': 'inline label - visible with data', 'FUNDING SOURCE': 'inline label - visible with data', 'YEAR CONSTRUCTED': 'inline label - visible with data', 'PROJECT COST (P\'000)': 'inline label - visible with data', 'YEAR REHABILITATED & FUNDING SOURCE': 'inline label - visible with data', 'PROJECT REHABILITATION  COST': 'inline label - visible with data', 'REPORTED NO. OF FARMER BENEFICIARIES': 'inline label - visible with data', 'REPORTED SERVICE AREA (HA)': 'inline label - visible with data', 'PRESENT SERVICE AREA HA (WET)': 'inline label - visible with data', 'PRESENT SERVICE AREA HA (DRY)': 'inline label - visible with data', 'PRESENT NO. OF FARMER BENEFICIARIES': 'inline label - visible with data', 'STATUS OF SSIPS': 'inline label - visible with data', 'REMARKS': 'inline label - visible with data', 'DATE UPDATED': 'inline label - visible with data', 'NAME OF ASSOCIATION': 'inline label - visible with data', 'STATUS OF ASSOCIATION': 'inline label - visible with data', 'PRESIDENT': 'inline label - visible with data', 'CONTACT NUMBER': 'inline label - visible with data', 'field_25': 'inline label - visible with data', });
lyr_PumpandEngineSets_4.set('fieldLabels', {'Index': 'inline label - visible with data', 'Prexc Program': 'inline label - visible with data', 'Sub Program': 'inline label - visible with data', 'Machine ID': 'inline label - visible with data', 'Machine Name': 'inline label - visible with data', 'Farm Operation': 'inline label - visible with data', 'Year Funded': 'inline label - visible with data', 'Fund Source': 'inline label - visible with data', 'Fundsource Agency': 'inline label - visible with data', 'Banner Program': 'inline label - visible with data', 'Bidded Cost': 'inline label - visible with data', 'Rated Power': 'inline label - visible with data', 'Brand': 'inline label - visible with data', 'Supplier': 'inline label - visible with data', 'Capacity': 'inline label - visible with data', 'Serial Number': 'inline label - visible with data', 'Service Area': 'inline label - visible with data', 'Beneficiary': 'inline label - visible with data', 'Beneficiary Representative': 'inline label - visible with data', 'Beneficiary Birthdate': 'inline label - visible with data', 'Recipient Type': 'inline label - visible with data', 'Date Turned-over': 'inline label - visible with data', 'Stage': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Client Feedback': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Municipality': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Description': 'inline label - visible with data', 'Document': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Date Move To Inventory': 'inline label - visible with data', 'Indicator Level 3': 'inline label - visible with data', 'Operating Unit': 'inline label - visible with data', 'Author': 'inline label - visible with data', });
lyr_PumpandEngineSets_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});