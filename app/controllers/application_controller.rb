class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception
    protect_from_forgery
    helper_method :current_user, :logged_in?

    private 

    def current_user 
        return nil unless session[:session_token]
        memberClass = session[:member_type].titleize.constantize 
        @current_user ||= memberClass.find_by(session_token: session[:session_token])
       
    end 

    def login!(user)
        session[:session_token] = user.session_token 
        session[:member_type] = user.class.to_s
    end 

    def logout!
        current_user.reset_session_token! 
        session[:session_token] = nil 
        @current_user = nil 
    end 

    def logged_in?
        !!@current_user
    end 

    ####### should I use base or the user validation? 
    def require_logged_in 
        unless current_user
            render json: { base: ['invalid credentials']}, status: 401
        end 
    end 
    
    ####### UPDATE WITH ROUTING #####
    def require_logged_out # prevent logged in users from seeing pages 
        # redirect_to user_url(current_user) if logged_in? 
    end 

end
