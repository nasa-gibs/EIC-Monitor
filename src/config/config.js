export default {
    1: ['MODIS_Terra_CorrectedReflectance_TrueColor'],
    2: ['GOES-East_ABI_GeoColor', 'GOES-West_ABI_GeoColor', 'Himawari_AHI_Band3_Red_Visible_1km'],
    3: ['VIIRS_SNPP_CorrectedReflectance_TrueColor'],
    4: ['VIIRS_SNPP_DayNightBand_At_Sensor_Radiance'],
    5: ['IMERG_Precipitation_Rate'],
    6: ['GHRSST_L4_MUR_Sea_Surface_Temperature'],
    7: ['MODIS_Aqua_Land_Surface_Temp_Day', 'MODIS_Aqua_CorrectedReflectance_TrueColor'],
    8: ['AMSRU2_Sea_Ice_Concentration_12km'],
    9: ['AMSRU2_Sea_Ice_Concentration_12km'],
    10: ['VIIRS_NOAA20_CorrectedReflectance_TrueColor'],
    11: ['OMI_Nitrogen_Dioxide_Tropo_Column', 'VIIRS_NOAA20_CorrectedReflectance_TrueColor'],
    12: ['AIRS_L3_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Daily_Night', 'AIRS_L3_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Daily_Day'],
    13: ['VIIRS_SNPP_AOT_Dark_Target_Land_Ocean', 'VIIRS_SNPP_AOT_Deep_Blue_Best_Estimate', 'VIIRS_SNPP_CorrectedReflectance_TrueColor'],
    14: ['TEMPO_L3_NO2_Vertical_Column_Troposphere'],
    15: ['TEMPO_L3_Ozone_Column_Amount'],
    16: ['VIIRS_NOAA20_DayNightBand_At_Sensor_Radiance'],
    17: ['VIIRS_NOAA20_DayNightBand_AtSensor_M15'],
    18: ['VIIRS_NOAA20_AOT_Dark_Target_Land_Ocean', 'VIIRS_NOAA20_AOT_Deep_Blue_Best_Estimate', 'VIIRS_NOAA20_CorrectedReflectance_TrueColor'],
    19: ['VIIRS_NOAA21_CorrectedReflectance_TrueColor']
  };
  
  export const scenarioUrls = {
    1: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&scenario=1&l=OrbitTracks_Terra_Descending(opacity=0.9),Coastlines_15m,MODIS_Terra_CorrectedReflectance_TrueColor&lg=false",
    2: "http://localhost:3000/?v=-218.05641352247375,-98.53068072538338,146.49566203427042,106.52986177528524&ics=true&ici=5&icd=10&df=true&kiosk=true&eic=si&l=Coastlines_15m(opacity=0.77),GOES-East_ABI_GeoColor,GOES-West_ABI_GeoColor,Himawari_AHI_Band3_Red_Visible_1km&lg=false&scenario=2",
    3: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,VIIRS_SNPP_Thermal_Anomalies_375m_Day,VIIRS_SNPP_CorrectedReflectance_TrueColor&lg=true&scenario=3",
    4: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m(opacity=0.63),VIIRS_SNPP_DayNightBand_At_Sensor_Radiance&lg=true&scenario=4",
    5: "http://localhost:3000/?v=-205.72171420740915,-98.53068072538338,206.78657152152607,106.52986177528524&df=true&kiosk=true&eic=si&l=IMERG_Precipitation_Rate,Land_Mask&lg=false&scenario=5",
    6: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m(opacity=0.71),GHRSST_L4_MUR_Sea_Surface_Temperature(palette=divergent_1)&lg=true&scenario=6",
    7: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,MODIS_Aqua_Land_Surface_Temp_Day,MODIS_Aqua_CorrectedReflectance_TrueColor(opacity=0.8)&lg=true&scenario=7",
    10: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,VIIRS_NOAA20_Thermal_Anomalies_375m_All,VIIRS_NOAA20_CorrectedReflectance_TrueColor&lg=false&scenario=10",
    11: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,OMI_Nitrogen_Dioxide_Tropo_Column(palette=rainbow_5,max=14800000000000000,squash=true),VIIRS_NOAA20_CorrectedReflectance_TrueColor&lg=false&scenario=11",
    12: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,AIRS_L3_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Daily_Night,AIRS_L3_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Daily_Day&lg=false&scenario=12",
    13: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,VIIRS_SNPP_AOT_Dark_Target_Land_Ocean,VIIRS_SNPP_AOT_Deep_Blue_Best_Estimate,VIIRS_SNPP_CorrectedReflectance_TrueColor&lg=false&scenario=13",
    14: "http://localhost:3000/?v=-158.20387917178206,-4.6433540592384475,-19.848061739477203,74.86320074995064&df=true&kiosk=true&eic=si&scenario=14&l=Coastlines_15m,TEMPO_L3_NO2_Vertical_Column_Troposphere&lg=false",
    15: "http://localhost:3000/?v=-170.45859053523907,-12.106744252573016,-12.991540899766122,78.3821332289227&df=true&kiosk=true&eic=si&scenario=15&l=Coastlines_15m,TEMPO_L3_Ozone_Column_Amount&lg=false",
    16: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&scenario=16&l=Coastlines_15m,VIIRS_NOAA20_DayNightBand_At_Sensor_Radiance&lg=false",
    17: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&scenario=17&l=Coastlines_15m,VIIRS_NOAA20_DayNightBand_AtSensor_M15&lg=false",
    18: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&scenario=18&l=Coastlines_15m,VIIRS_NOAA20_AOT_Dark_Target_Land_Ocean,VIIRS_NOAA20_AOT_Deep_Blue_Best_Estimate,VIIRS_NOAA20_CorrectedReflectance_TrueColor&lg=false",
    19: "http://localhost:3000/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&scenario=19&l=Coastlines_15m,VIIRS_NOAA21_Thermal_Anomalies_375m_All,VIIRS_NOAA21_CorrectedReflectance_TrueColor&lg=false",
  }

  export const scenarioUrlsProd = {
    1: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&scenario=1&l=OrbitTracks_Terra_Descending(opacity=0.9),Coastlines_15m,MODIS_Terra_CorrectedReflectance_TrueColor&lg=false",
    2: "https://worldview.earthdata.nasa.gov/?v=-218.05641352247375,-98.53068072538338,146.49566203427042,106.52986177528524&ics=true&ici=5&icd=10&df=true&kiosk=true&eic=si&l=Coastlines_15m(opacity=0.77),GOES-East_ABI_GeoColor,GOES-West_ABI_GeoColor,Himawari_AHI_Band3_Red_Visible_1km&lg=false&scenario=2",
    3: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,VIIRS_SNPP_Thermal_Anomalies_375m_Day,VIIRS_SNPP_CorrectedReflectance_TrueColor&lg=true&scenario=3",
    4: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m(opacity=0.63),VIIRS_SNPP_DayNightBand_At_Sensor_Radiance&lg=true&scenario=4",
    5: "https://worldview.earthdata.nasa.gov/?v=-205.72171420740915,-98.53068072538338,206.78657152152607,106.52986177528524&df=true&kiosk=true&eic=si&l=IMERG_Precipitation_Rate,Land_Mask&lg=false&scenario=5",
    6: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m(opacity=0.71),GHRSST_L4_MUR_Sea_Surface_Temperature(palette=divergent_1)&lg=true&scenario=6",
    7: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,MODIS_Aqua_Land_Surface_Temp_Day,MODIS_Aqua_CorrectedReflectance_TrueColor(opacity=0.8)&lg=true&scenario=7",
    10: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,VIIRS_NOAA20_Thermal_Anomalies_375m_All,VIIRS_NOAA20_CorrectedReflectance_TrueColor&lg=false&scenario=10",
    11: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,OMI_Nitrogen_Dioxide_Tropo_Column(palette=rainbow_5,max=14800000000000000,squash=true),VIIRS_NOAA20_CorrectedReflectance_TrueColor&lg=false&scenario=11",
    12: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,AIRS_L3_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Daily_Night,AIRS_L3_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Daily_Day&lg=false&scenario=12",
    13: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&l=Coastlines_15m,VIIRS_SNPP_AOT_Dark_Target_Land_Ocean,VIIRS_SNPP_AOT_Deep_Blue_Best_Estimate,VIIRS_SNPP_CorrectedReflectance_TrueColor&lg=false&scenario=13",
    14: "https://worldview.earthdata.nasa.gov/?v=-158.20387917178206,-4.6433540592384475,-19.848061739477203,74.86320074995064&df=true&kiosk=true&eic=si&scenario=14&l=Coastlines_15m,TEMPO_L3_NO2_Vertical_Column_Troposphere&lg=false",
    15: "https://worldview.earthdata.nasa.gov/?v=-170.45859053523907,-12.106744252573016,-12.991540899766122,78.3821332289227&df=true&kiosk=true&eic=si&scenario=15&l=Coastlines_15m,TEMPO_L3_Ozone_Column_Amount&lg=false",
    16: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&scenario=16&l=Coastlines_15m,VIIRS_NOAA20_DayNightBand_At_Sensor_Radiance&lg=false",
    17: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&scenario=17&l=Coastlines_15m,VIIRS_NOAA20_DayNightBand_AtSensor_M15&lg=false",
    18: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&scenario=18&l=Coastlines_15m,VIIRS_NOAA20_AOT_Dark_Target_Land_Ocean,VIIRS_NOAA20_AOT_Deep_Blue_Best_Estimate,VIIRS_NOAA20_CorrectedReflectance_TrueColor&lg=false",
    19: "https://worldview.earthdata.nasa.gov/?v=-181.74360912131363,-98.53068072538338,182.80846643543055,106.52986177528524&df=true&kiosk=true&eic=si&scenario=19&l=Coastlines_15m,VIIRS_NOAA21_Thermal_Anomalies_375m_All,VIIRS_NOAA21_CorrectedReflectance_TrueColor&lg=false",
  }

  export const scenarioNicknames = {
    1: 'True color imagery from Terra satellite',
    2: 'Geostationary imagery from NOAA and JAXA Satellites',
    3: 'Active fires detected by Suomi NPP satellite',
    4: 'Black Marble night time imagery from Suomi NPP satellite',
    5: 'Rain and Snow',
    6: 'Sea Surface Temperature',
    7: 'Land Surface Temperature',
    10: 'Active fires detected by NOAA-20 satellite',
    11: 'Nitrogen Dioxide (NO2) by Aura satellite',
    12: 'Carbon Monoxide (CO) by Aqua satellite',
    13: 'Aerosol Optical Depth (AOD) by Suomi NPP satellite',
    14: 'Nitrogen Dioxide (NO2) by TEMPO satellite',
    15: 'Ozone by TEMPO satellite',
    16: 'Black Marble night time imagery from NOAA20 satellite',
    17: 'Black Marble night time imagery from NOAA20 satellite',
    18: 'Aerosol Optical Depth (AOD) by NOAA20 satellite',
    19: 'Active fires detected by NOAA-21 satellite',
  }