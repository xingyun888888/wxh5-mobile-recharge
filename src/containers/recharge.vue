<template lang="html">
  <div class="recharge-wrap">
    <div class="header">
      <div class="big-sign">
        <img src="../assets/ZHU.png" alt="">
        <!--<i class="iconfont icon-cunqianguan"></i>-->
      </div>
      <p class="msg">需支付押金</p>
      <p class="amount">&yen;{{needRecharge}}</p>
      <div class="reminds">充电宝自带充电线支持
        <i class="iconfont icon-apple"></i>
        <i class="iconfont icon-andriod"></i>
        <i class="iconfont icon-shujuxian"></i>(Type-C)
      </div>
    </div>

    <x-button active="true" :class="{'disable-click':!needRecharge}" @on-click="recharge">确认支付</x-button>
    <p class="recharge-tips">点击支付表示已阅读并同意<span @click="changeShowUseProtocol">使用条款</span>和<span @click="changeShowRechargeProtocol">充值协议</span></p>

    <divider>温馨提示</divider>

    <div class="tips">
      <p>1. 归还充电宝之后，用户可以查看支付押金和使用扣费后剩余押金的信息；</p>
      <p>2. 充电宝借出后，15分钟后开始扣费，1小时收费1元，每天最高收费8元。</p>
    </div>

    <confirm title="您暂时不需要充值" v-model="showConfirm" confirm-text="确定"  theme="android" content="当您押金不足80元时，需补存至100元押金" @on-confirm="closeConfirm">
      
    </confirm>

    <div class="protocol-content" v-if="showRechargeProtocol">
      <div class="main-content">
        <div class="title"><img src="http://7xpceu.com1.z0.glb.clouddn.com/mask_tips.png"><div class="word">充值协议</div></div>
        <div class="close-wrap" @click="closeRechargeProtocol"><img src="http://7xpceu.com1.z0.glb.clouddn.com/close.png"></div>
        <div class="scroll-content">
          <div class="sub-content">尊敬的用户，为保障您的合法权益，请您在充值前仔细阅读本《充值协议》（“本协议”）以了解爽电的充值及余额使用规则并避免产生任何误解。当您点击“确认支付”按钮，即视为您已阅读、理解本协议，并同意按照本协议约定的规则进行充值或使用账户余额。</div>
          <div class="sub-title">1. 定义：</div>
          <div class="sub-content">充值本金：您通过“爽电”公众号账号实际支付的金额。</div>
          <div class="sub-content">账户余额：您的用户帐号中显示的金额。</div>
          <div class="sub-title">2. 账户余额有效期：</div>
          <div class="sub-content">用户账户余额的有效期为自充值之日起至使用完毕为止。</div>
          <div class="sub-title">3. 账户余额的使用规则：</div>
          <div class="sub-content">1) 账户余额中的充值本金，可用于支付租赁充电宝，购买充电宝，可以提现；</div>
          <div class="sub-content">2) 充值本金中未使用部分，可申请提现退款。例如：</div>
            <div class="sub-content">(1) 您充值本金为100元，且您尚未使用，则您可申请退还100元；</div>
            <div class="sub-content">(2) 如您充值本金为100元，且您已消费40元，则您可申请退还60元。</div>
          <div class="sub-title">4. 保证与承诺：</div>
          <div class="sub-content">您完全理解并同意，爽电所提供的推荐好友赚提成仅适用于正当、合法按照《用户协议》使用我们服务的用户。一旦发现您的用户帐号存在任何利用前述规则从事作弊行为以获取不正当经济利益的情形，爽电有权追回因作弊行为取得的所有不正当的经济利益，并且爽电保留停止向您提供服务以及根据作弊行为的严重程度进一步追究法律责任的权利。</div>
          <div class="sub-title">5. 特别说明：</div>
          <div class="sub-content">您完全理解并同意，爽电有权随时修改本协议内容，届时将通过本软件上公布修改后的协议，该公布将被视为爽电已通知用户；同时，爽电也可通过其他适当方式通知用户。如果您选择继续充值即表示您同意并接受修改后的协议并受其约束；如果您不同意本公司对本协议的修改，请立即放弃充值或停止使用本服务。在适用法律法规允许的范围内，本协议下充值账户余额的使用规则的最终解释权归爽电所有。</div> 
        </div>  
      </div>
    </div>
    <div class="protocol-content" v-if="showUseProtocol">
        <div class="main-content">
          <div class="title"><img src="http://7xpceu.com1.z0.glb.clouddn.com/mask_tips.png" /><div class="word">使用条款</div></div>
          <div class="close-wrap" @click="closeUseProtocol"><img src="http://7xpceu.com1.z0.glb.clouddn.com/close.png" /></div>
          <div class="scroll-content">
            <div class="sub-title">1.特别提示</div>
            <div class="sub-content">1.1本《搏壹科技-共享充电宝租赁服务协议》（以下简称《协议》）是服务使用人（以下简称“用户”）与深圳市搏壹科技有限公司（以下简称“本公司”）之间关于用户关注、使用、管理“爽电”公众服务号和“爽电+”小程序软件账号，以及使用本公司提供的相关服务所订立的协议。“爽电”公众服务号和“爽电+”小程序软件（以下简称“本软件”）。</div>
            <div class="sub-content">1.2 本软件由深圳市搏壹科技有限公司研发，并将按照本协议的规定及不时发布的操作规则提供基于互联网以及移动网的相关服务（包括充电宝租用软件的网络服务和充电宝使用服务，以下也称“本服务”或“搏壹科技-共享充电宝租赁服务”）。为获得本服务，用户应认真阅读、充分理解本《协议》中条款，特别涉及免除或者限制本公司责任的免责条款、限制用户权利的条款、约定争议解决方式、司法管辖、法律适用的条款。请您审慎阅读，一经点击“确认”按键，即表示同意接受本《协议》；如您不接受本《协议》的部分或全部内容，请您不要点击“确认”按键。（无民事行为能力人谢绝使用本服务、限制民事行为能力人应在法定监护人监护下阅读、理解及使用本服务）。除非您接受本《协议》所有条款，否则您无权使用本软件及其相关服务。您的账号获取、登录和使用本服务等行为将视为对本《协议》的接受以及接受本《协议》各项条款的约束。</div>
            <div class="sub-title">2.知识产权声明</div>
            <div class="sub-content">2.1 本软件是由本公司开发。本软件的一切著作权、商标权、专利权、商业秘密等知识产权，以及相关的所有信息内容，包括但不限于：文字表述及其组合、图标、图饰、图表、色彩、界面设计、版面框架、有关数据、印刷材料、或电子文档等均受中华人民共和国著作权法、商标法、专利法、反不正当竞争法和相应的国际条约以及其他知识产权法律法规的保护，除涉及第三方授权的软件或技术外，本公司享有上述知识产权。</div>
              <div class="sub-content">许可任何第三方实施、利用、转让上述知识产权，本公司保留追究上述未经许可使用责任的权利。</div>
            <div class="sub-title">3. 服务内容</div>
            <div class="sub-content">3.1 本软件服务的具体内容由本公司根据实际情况提供，租借充电宝、购买充电宝、查询交易明细、查询租借记录等。</div>
            <div class="sub-content">3.2 本软件提供的部分服务为收费的服务，用户使用收费服务需要向本公司支付一定的费用。对于收费的服务，我们会尽量在用户使用之前给予用户明确的提示，只有用户根据提示确认其愿意支付相关费用，用户才能使用该服务。如用户拒绝支付相关费用，则本公司有权不向用户提供该服务。</div>
              <div class="sub-content">3.3 本公司仅提供相关的共享充电宝本服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、其他与接入互联网或移动网络有关的装置）及第三方收取的相关费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行承担。</div>
            <div class="sub-title">4. 服务变更、中断或终止</div>
            <div class="sub-content">4.1 鉴于本服务的特殊性，用户同意本公司有权合理随时变更、中断或终止部分或全部的本服务（包括收费服务及免费服务）。如变更、中断或终止的本服务属于免费服务，本公司无需通知用户，也无需对任何用户或任何第三方承担任何相应法律关责任；如变更、中断或终止的网络服务属于收费服务，本公司应当在变更、中断或终止之前事先通知用户，并应向受影晌的用户提供等值的替代性的收费服务，如用户不愿意接受替代性的收费服务，就该用户已经向本公司支付的服务费，本公司应当按照该用户实际使用相应收费服务的情况扣除相应服务费之后将剩余的服务费退还给该用户。</div>
            <div class="sub-content">4.2 用户理解，本公司需要定期或不定期地对提供本服务的平台（如互联网网站、移动网络等）或相关的设备进行检修或者维护，如因此类情况而造成收费服务在合理时间内的中断，本公司无需为此承担任何责任，但除特殊情况外应当事先进行通告。</div>
            <div class="sub-content">4.3 如发生下列任何一种情形，本公司有权随时中断或终止向用户提供本协议项下的服务【包括但不限于收费及免费的本服务（其中包括基于广告商业模式的免费服务）】而无需对用户或任何第三方承担任何法律相关责任：</div>
            <div class="sub-content">(1) 用户违反本协议中规定的使用规则；</div>
            <div class="sub-content">(2) 用户在使用收费服务时未按规定向本公司支付相应的服务费</div>
            <div class="sub-title">5. 使用规则</div>
            <div class="sub-content">5.1 用户不应将其账号、密码转让或借予他人使用。如用户发现其账号遭他人非法使用，应立即通知本公司。因黑客行为或用户的保管疏忽导致账号、密码遭他人非法使用的，本公司不因此承担法律任何相关责任。</div> 
            <div class="sub-content">5.2用户同意本公司有权在提供本服务过程中以各种方式投放各种商业性广告或其他任何类型的商业信息。并且，用户同意接受本公司通过电子邮件或其他方式向用户发送商品促销或其他相关商业信息。</div> 
            <div class="sub-content">5.4 用户在使用本软件服务过程中，必须遵循以下原则：</div> 
            <div class="sub-content">(1) 遵守中国有关的法律和法规；</div> 
            <div class="sub-content">(2) 遵守所有与本服务有关的网络协议、规定和程序;</div> 
            <div class="sub-content">(3) 不得为任何非法目的而使用本服务；</div> 
            <div class="sub-content">(4) 不得以任何形式使用本软件服务侵犯本公司的商业利益，包括但不限于发布非经本公司许可的商业或非商业广告；</div> 
            <div class="sub-content">(5) 不得利用本软件服务系统进行任何可能对互联网或移动网正常运转造成不利影晌的行为；</div> 
            <div class="sub-content">(6) 不得利用本产品提供的服务上传、展示或传播任何虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的、或者其他任何违反公序良俗或非法的信息资料；</div> 
            <div class="sub-content">(7) 不得侵犯其他任何第三方的专利权、著作权、商标权、名誉权或其他任何合法权益；</div> 
            <div class="sub-content">(8) 不得利用本软件服务系统进行任何不利于本公司的行为；</div> 
            <div class="sub-content">(9) 本公司针对某些特定的本软件服务的使用行为通过各种方式（包括但不限于网页公告、电子邮件、短信提醒等）作出的任何声明、通知、警示等内容视为本协议的一部分，用户如使用本服务，视为用户同意该等声明、通知、警示的内容，如用户不同意该等声明、通知或警示，应当立即停止使用本服务。</div> 
            <div class="sub-content">5.5 本公司有权对用户使用本软件服务，包括但不限于收费及免费服务（其中包括基于广告商业模式的免费服务）的情况进行审查和监督(包括但不限于对用户存储在本公司的内容进行审核，如用户在使用本服务时违反任何上述规定，本公司有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或删除用户张贴的内容等、暂停或终止用户使用本服务的权利）以减轻用户不当行为造成的影响。因用户自身行为需向第三人承担责任的，由用户自行承担，与本公司无关。</div> 
            <div class="sub-content">5.6 本公司有权基于其独立判断，在经本公司合理判断其认为可能发生危害本软件或本公司等的情形时（包括但不限于用户违反本协议第6.4条项下的原则），本公司保留在不另行通知的情况下不经事前通知用户而先行暂停、中断或终止向用户提供本协议项下的全部或部分用户服务的权利，且无需对用户或任何第三方承担法律相关任何责任。当用户因本条原因被暂停、中断或终止服务时，用户应按照本公司指示行事，否则将被视为违约并应承担本协议第10.2条项下的违约责任，并且本公司保留追究用户法律责任的权利。</div> 
            <div class="sub-title">“爽电+”服务使用及管理规定</div>
            <div class="sub-content">6.1 本公司拥有本软件充电宝的所有权、使用权、以及许可用户使用该充电宝的权利，并负责日常投放、保养、维修。同时，本软件服务系统的所有权及一切知识产权归本公司所有。</div> 
            <div class="sub-content">6.2 用户所预订并提取的充电宝仅限该用户自己使用，严禁转租或转借于他人使用。</div> 
            <div class="sub-content">6.3 用户在使用充电宝期间如与第三方发生纠纷应由纠纷双方自行解决，本公司不承担任何相关赔偿义务，如给本公司造成损失的，用户应向本公司承担赔偿义务。</div> 
            <div class="sub-content">6.4 用户应爱护充电宝，并合理、正常、安全地使用。如在用户使用期间因用户使用或保管不善导致遗失、被窃或毀坏及部分损坏等，用户须赔偿本公司一切损失。</div> 
            <div class="sub-content">6.5 用户归还充电宝时应确认归还已成功。若出现故障导致归还的情况，用户可联系客服，以便本公司及时采取措施处理故障。</div> 
            <div class="sub-content">6.6 用户不得利用本服务从事违法活动，不得恶意损坏、故意涂污、擅自拆解充电宝，否则因此造成的损失及责任由用户承担。</div> 
            <div class="sub-title">7. 隐私保护</div>
            <div class="sub-content">7.1 本软件可能会与第三方合作向用户提供相关的服务，在此情况下，如该第三方同意承担与本公司同等的保护用户隐私的责任，则本公司有权将用户的注册资料等提供给该第三方。</div> 
            <div class="sub-content">7.2 在不透露单个用户隐私资料的前提下，本公司有权对整个用户数据库进行分析并对用户数据库进行商业上的使用。本公司《爽电隐私政策》作为本协议的有效组成部分，且用户同意并接受本公司不定时的更新隐私政策，如用户不接受现行的或更新后的隐私政策，则应立即停止使用本服务。</div> 
            <div class="sub-title">8. 免责声明</div>
            <div class="sub-content">8.1 用户已明确知晓本协议的内容，用户不按本协议约定同意其使用本服务所存在的风险，风险将完全由其自己承担；及因不按本协议说明及提示，使用因其使用本服务所而产生的不利一切后果均也由其本人自己承担，除本协议另有约定外，本公司对用户上述行为不承担法律相关任何责任。</div> 
            <div class="sub-content">8.2 本公司对本服务不作任何类型的担保，包括但不限于本服务的及时性、安全性、准确性、及用户使用过程中非产品质量问题的安全性，对在任何情况下因使用或不能使用本服务所产生的直接、间接、偶然、特殊及后续的损害及风险，本公司不承担任何责任。</div> 
            <div class="sub-content">8.3 对于不可抗力、计算机病毒、黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何网络、技术、通信线路等原因造成的服务中断或不能满足用户要求的风险，均由用户自行承担，本公司不承担相应法律任何相关责任。</div> 
            <div class="sub-content">8.4 用户同意，对于本公司向用户提供的下列产品或者服务的质量缺陷本身及其引发的任何损失，本公司无需承担任何法律相关责任：</div> 
            <div class="sub-content">(1) 本公司向用户免费提供的各项服务；</div> 
            <div class="sub-content">(2) 本公司向用户赠送的任何产品或者服务；</div> 
            <div class="sub-content">(3) 本公司向收费网络服务用户附赠的各种产品或者服务。</div> 
            <div class="sub-content">8.5 用户理解安全使用充电宝的重要性，且保证在任何可能引起安全隐患的情况下均不使用本软件充电宝，并同意一切因与本公司无关的原因在使用本软件服务的过程中存在的安全隐患，本公司概不负责赔偿。如有举证需要，本公司可以向有关部门提供相关数据作为证据。</div> 
            <div class="sub-title">9. 违约赔偿</div>
            <div class="sub-content">9.1 如因本公司违反有关法律、法规或本协议项下的任何条款而给用户造成损失，本公司同意承担由此造成的损害赔偿责任。</div> 
            <div class="sub-content">9.2 用户同意保障和维护本公司及其他用户的利益，如因用户违反有关法律、法规或本协议项下的任何条款而给本公司或任何其他第三人造成损失，用户同意承担由此造成的损害赔偿责任，包括但不限于赔偿本公司所有直接和间接损失。</div> 
            <div class="sub-title">10. 协议修改</div>
            <div class="sub-content">10.1 本公司有权随时修改本协议的任何条款，一旦本协议的内容发生变动，本公司将会直接在本公司网站以及公众号上公布修改之后的协议内容，该公布行为视为本公司已经通知用户修改内容。同时本公司也可通过其他适当方式向用户提示修改内容。</div> 
            <div class="sub-content">10.2 如果不同意本公司对本协议相关条款所做的修改，用户应当停止使用本服务。如果用户继续使用本服务，则视为用户同意并接受本公司对本协议相关条款所做的修改。</div> 
            <div class="sub-title">11. 争议解决与适用法律</div>
            <div class="sub-content">11.1 本协议的订立、执行和解释及争议的解决均应适用中国法律并受中国法院管辖。</div> 
            <div class="sub-content">11.2 如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向本公司所在地的人民法院提起诉讼。</div>           
            <div class="sub-title">12. 其他规定</div>
            <div class="sub-content">12.1 如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。</div> 
            <div class="sub-content">12.2 本协议中的标题仅为方便而设，在解释本协议时不应受该标题的限制。</div> 

          </div>  
        </div>   
    </div>
  </div>
</template>

<script>
import { XButton } from '@/components'
import { Confirm, Divider } from 'vux'
import { modifyTitle, wxRegister } from 'utils'
import { apiRecharge, apiCheckPay, apiGetBalance } from 'api'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      orderNo: '',
      amount: '',
      needRecharge: '',
      showConfirm: false,
      showRechargeProtocol: false,
      showUseProtocol: false
    };
  },
  created () {
    modifyTitle('充值')
    wxRegister(location.href)
    this.getBalance();
  },
  methods: {
    changeShowRechargeProtocol() {
      this.showRechargeProtocol = true;
    },
    changeShowUseProtocol() {
      this.showUseProtocol = true;
    },
    closeUseProtocol() {
      this.showUseProtocol = false;
    },
    closeRechargeProtocol() {
      this.showRechargeProtocol = false;
    },
    getBalance () {
      apiGetBalance().then(res => {
        res = res.data
        if (res.errcode === 0) {
          this.amount = parseFloat(res.data.amount)
          this.needRecharge = this.amount > 80.0 ? 0 : (100.0 - this.amount).toFixed(2);
        }
      })
    },
    closeConfirm() {
      this.showConfirm = false;
    },
    recharge () {
      if(this.needRecharge < .001) {
        // self.$vux.toast.text('您暂时不需要充值，');
        this.showConfirm = true;
        return false;
      }
      const self = this
      apiRecharge().then((res) => {
        res = res.data
        this.orderNo = res.data.out_trade_no
        wx.chooseWXPay({
          timestamp: res.jsApiParameters.timeStamp,
          nonceStr: res.jsApiParameters.nonceStr,
          package: res.jsApiParameters.package,
          signType: res.jsApiParameters.signType,
          paySign: res.jsApiParameters.paySign,
          success: function (res) {
            self.checkPay()
          }
        })
      })
    },
    checkPay () {
      apiCheckPay(this.orderNo).then((res) => {
        var data = res.data
        if(data.errcode === 0) {
          this.amount = 0;
          //弹出toast
          self.$vux.toast.text('恭喜您充值成功');
        } else {
          self.$vux.toast.text(data.msg || "充值失败，请联系客服");
        }
        // this.$router.push({
        //   name: 'commonReply',
        //   params: {
        //     type: 'recharge'
        //   }
        // })
      })
    }
  },
  components: {
    XButton,
    Confirm,
    Divider
  }
};
</script>

<style lang="less">
.recharge-wrap{
  .header{
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    padding: 0 16px;
    box-sizing: border-box;
  }
  .big-sign{
    margin: 32px auto 0;
    text-align: center;
    width: 64px;
    height: 64px;
    .iconfont{
      color: #FFC502;
      font-size: 48rpx;
    }
  }
  .disable-click {
    color: hsla(0,0%,100%,.4);
  }
  .msg{
    margin-top: 8px;
    text-align: center;
    color: #212121;
  }
  .amount{
    margin: 6px 0;
    text-align: center;
    color: #0085EE;
    font-size: 32rpx;
  }
  .reminds{
    border-top: 1px solid #F2F2F2;
    text-align: center;
    height: 64rpx;
    line-height: 64rpx;
    font-size: 12rpx;
    color: #757575;
    .iconfont{
      color: #757575;
      margin-right: 2px;
    }
    .icon-apple{
      font-size: 18rpx;
    }
    .icon-andriod{
      position: relative;
      top: 1px;
    }
    .icon-shujuxian{
      position: relative;
      top: 1px;
    }
  }
  .recharge-tips{
    margin-top: 8px;
    text-align: center;
    color: #999;
    span{
      color: #0085ee;
    }
  }
  .tips{
    padding: 0 16px;
    color: #999999;
    p{
      margin-top: 4px;
    }
  }

  /*
    vux
  */
  .vux-divider{
    margin-top: 8px auto 0;
  }
}


/* 以下是充值协议 */
.protocol-content {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, .15);
}

.main-content {
  height: 50%;
  top: 25%;
  left: 3%;
  width: 90%;
  background: #fff;
  color: #666;
  position: absolute;
  border-radius: 5px;
  font-size: 12px;
  line-height: 1.75;
  margin-top: -25px;
  padding: 50px 2% 20px;
  box-sizing: content-box;
  overflow: visible;
}



.main-content .title {
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 30px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}

.main-content .title img {
  width: 200px;
  height: 100%;
}

.main-content .title .word {
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  line-height: 30px;
}

.main-content .close-wrap {
  position: absolute;
  top: -65px;
  right: 10px;
  height: 65px;
  width: 28px;
}

.main-content .close-wrap img {
  width: 100%;
  height: 100%;
}

.scroll-content {
  height: 100%;
  overflow: scroll;
}

.scroll-content .sub-title {
  color: #0d6dea;
  padding-top: 15px;
}
/* 充值协议结束 */

</style>
