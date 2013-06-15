require "net/http"

class MainController < ApplicationController

  def patients
    render text: Net::HTTP.get(URI.parse(params[:url]))
  end

  def maps
    center_point = params[:center_point]
    zoom = params[:zoom_level]
    key = params[:key]
    base_url = params[:url]
    map_size = params[:map_size]
    pp = params[:pp]
    pp_string = ""
    pp.each do |p|
      pp_string << "&pp=" + p
    end
    url = base_url + "/" + center_point + "/" + zoom + "?key=" + key + "&mapSize=" + map_size + pp_string
    render text: Net::HTTP.get(URI.parse(url))
  end
end
