class MainController < ApplicationController
  def index
    # make a soap request using MRN and Facility OID
    nyc4_oid = '2.16.840.1.113883.3.2591.100.4.1.1'

    data = [
      { mrn: 721439, oid: nyc4_oid },
      { mrn: 783081, oid: nyc4_oid },
      { mrn: 661347, oid: nyc4_oid },
      { mrn: 667378, oid: nyc4_oid },
      { mrn: 721439, oid: nyc4_oid }
    ]


    mrn = params[:mrn]
    facility_oid = params[:facility_oid]
    endpoint = "http://hackathon.shinnyapi.org/messagegateway/ExecutePropietary"
    response
    plain = Base64.decode64(response)
    # Base64 decode the response
    # select via XPATH
  end
end
