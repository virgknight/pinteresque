json.extract! @user, :id, :username, :short_bio, :pronouns, :display_name
json.photoUrl url_for(@user.avatar) if @user.avatar.attached?