ShinnyHackathon::Application.routes.draw do
  get '/patients' => 'main#patients'
  get '/maps' => 'main#maps'
  root to: 'main#index'
end
