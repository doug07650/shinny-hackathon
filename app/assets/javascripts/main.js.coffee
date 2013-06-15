# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

jQuery ($) ->

  center = new Microsoft.Maps.Location(40.65, 73.95)

  BING_MAPS_API_KEY = 'Andev8CFL3FCYKhwLeHCJfJMHfGnXQzPljRPyTHnKjGmb6E6QutA1URQAcPreAMX'
  BING_MAPS_LOCATION_URL = "http://dev.virtualearth.net/REST/v1/Locations"
  BING_MAPS_IMAGE_URL = "http://dev.virtualearth.net/REST/v1/Imagery/Map/Road"

  base_url = "/maps?url=" + BING_MAPS_IMAGE_URL + "&key=" + BING_MAPS_API_KEY + "&center_point=40.650,-73.950&zoom_level=12&map_size=800,600"

  pps = []
  ppString = ""

  $.each greenMarkets.data, (index, elem) ->
    console.log elem
    pps.push [elem[9][1], elem[9][2]]

  for i in [0..10]
    # ppString += "&pp[]=#{elem[9][1]},#{elem[9][2]}"
    ppString += "&pp[]=#{pps[i][0]},#{pps[i][1]}"

  $('#map-image').attr('src', base_url + ppString)


  $.ajax
    url: '/patients?url=http://shin-ny.herokuapp.com/patients/1'
    dataType: 'xml'
    success: (data, status, xhr) ->
      address = $(data).find('ClinicalDocument').find('recordTarget').find('patientRole').find('addr')
      # $('#main').append(address)
