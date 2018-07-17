//app.js
App({
  data: {
    Identifier: '123456',  //用户id，可以是openid之类的，保证唯一就行
    UserSig : '',  //后台返回来的
    toFriend: '1234567',  //对方的用户id  [专家唯一标示id]
    toFirendNickName: '',  //对方的昵称（暂时没用）
    toFirendHeadUrl: '',  //对方的头像（暂时没用）
    sdkAppId: 1400037025, //sdkId
    accountType: 884,  //账号类型
    accountMode: 0, //帐号模式，0-表示独立模式，1-表示托管模式
    //登录用户的信息
    userInfo : {
      nickName : '王八'
    },

    msgPageSie : 10,
    lastMsgTime : 0,
    msgKey : ''
  },

  //根据用户的唯一id（openId）获取用户信息  
  findUserInfoByIdentifier: function (identifier){
    if (identifier == '123456') {
      return {
        nickName : '王八'
      }
    } else if (identifier == '1234567') {
      return {
        nickName: '小姑娘'
      }
    }
  },



  //   时间转换函数：
  //把毫秒转成日期
  ms2str: function (ms) {
	  Date.prototype.toLocaleString = function () {
		  var month = this.getMonth() < 10 ? '0' + (this.getMonth() + 1) : this.getMonth() + 1;
		  var date = this.getDate() < 10 ? '0' + this.getDate() : this.getDate();
		  var hours = this.getHours() < 10 ? '0' + this.getHours() : this.getHours();
		  var minutes = this.getMinutes() < 10 ? '0' + this.getMinutes() : this.getMinutes();
		  var seconds = this.getSeconds() < 10 ? '0' + this.getSeconds() : this.getSeconds();
		  return month + "-" + date + " " + hours + ":" + minutes;
	  };

	  var date = new Date(ms * 1000);
	  return date.toLocaleString();
  }
})