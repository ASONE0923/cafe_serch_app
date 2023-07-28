class CafesController < ApplicationController
  def search
    uri = URI('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/')
    request_params = {
      key: '2129d001a52de645', 
      lat: params[:latitude], # 緯度
      lng: params[:longitude], # 経度
      range: params[:range], # 検索範囲
      start: params[:start], # 検索の開始位置
      format: 'json' # レスポンス形式
    }

    uri.query = URI.encode_www_form(request_params)

    res = Net::HTTP.get_response(uri)
    render json: res.body, status: :ok
  end
end
