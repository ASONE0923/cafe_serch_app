class SessionsController < Devise::SessionsController
  private

  def respond_with(resource, _opts = {})
    Rails.logger.info "Resource is: #{resource.inspect}"
    
    render json: {
      message: 'ログインに成功しました。',
      jwt: resource.generate_jwt # メソッドは自分で定義する
    }, status: :ok
  end


  def respond_to_on_destroy
    log_out_success && return if signed_out?

    log_out_failure
  end

  def log_out_success
    render json: { message: "ログアウトしました。" }, status: :ok
  end

  def log_out_failure
    render json: { message: "何も起こりませんでした。" }, status: :unauthorized
  end
end
