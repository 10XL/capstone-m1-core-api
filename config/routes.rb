Rails.application.routes.draw do
  scope :api, defaults: {format: :json} do
    resources :cities, only: [:index]
    resources :states, only: [:index]
  end

  get '/ui' => 'ui#index'
  get '/ui#' => 'ui#index'
  root 'ui#index'
end
