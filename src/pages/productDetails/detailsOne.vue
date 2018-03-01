<template>
  <div class="details-one">
    <table class="table-one">
      <tbody>
      <tr>
        <td>基金全称</td>
        <td>{{textList.fullName}}</td>
        <td>基金简称</td>
        <td>{{textList.forShort}}</td>
      </tr>
      <tr>
        <td>基金代码</td>
        <td>{{textList.fundCode}}</td>
        <td>基金类型</td>
        <td>{{textList.fundType}}</td>
      </tr>
      <tr>
        <td>发行日期</td>
        <td>{{textList.publishDate}}</td>
        <td>成立日期/规模</td>
        <td>{{textList.foundDateScale}}</td>
      </tr>
      <tr>
        <td>资产规模</td>
        <td>{{textList.assetsScale}}</td>
        <td>份额规模</td>
        <td>{{textList.shareScale}}</td>
      </tr>
      <tr>
        <td>基金管理人</td>
        <td>{{textList.fundCustodian}}</td>
        <td>基金托管人</td>
        <td>{{textList.fundTrustee}}</td>
      </tr>
      <tr>
        <td>基金经理人</td>
        <td>{{textList.manager}}</td>
        <td>成立来分红</td>
        <td>{{textList.historicalDividend}}</td>
      </tr>
      <tr>
        <td>管理费率</td>
        <td>{{textList.administrativeFee}}</td>
        <td>托管费率</td>
        <td>{{textList.trusteeFee}}</td>
      </tr>
      <tr>
        <td>销售服务费率</td>
        <td>{{textList.serviceFee}}</td>
        <td>最高认购费率</td>
        <td>{{textList.maxSalesCharge}}</td>
      </tr>
      <tr>
        <td>最高申购费率</td>
        <td>{{textList.maxBuyCharge}}</td>
        <td>最高赎回费率</td>
        <td>{{textList.maxRedemptionFee}}</td>
      </tr>
      <tr>
        <td>业绩比较基准</td>
        <td>{{textList.baseline}}</td>
        <td>跟踪标的</td>
        <td>{{textList.trackTarget}}</td>
      </tr>
      </tbody>
    </table>

    <p class="describe">
      基金管理费和托管费直接从基金产品中扣除，具体计算方法及费率结构请参见基金《招募说明书》
    </p>
    <!--投资目标-->
    <div class="content-box">
      <p class="item-title">
        <span class="label-txt">投资目标</span>
      </p>
      <p class="box-text">{{textList.investGoal}}</p>
    </div>
    <!--投资理念-->
    <div class="content-box">
      <p class="item-title">
        <span class="label-txt">投资理念</span>
      </p>
      <ul class="line-ul">
        <li v-for="item in textList.investIdea">{{item}}</li>
      </ul>
    </div>
    <!--投资范围-->
    <div class="content-box">
      <p class="item-title">
        <span class="label-txt">投资范围</span>
      </p>
      <p class="box-text">{{textList.investRange}}</p>
    </div>
    <!--投资策略-->
    <div class="content-box">
      <p class="item-title">
        <span class="label-txt">投资策略</span>
      </p>
      <p class="box-text">{{textList.investStrategy}}</p>
    </div>
    <!--分红政策-->
    <div class="content-box">
      <p class="item-title">
        <span class="label-txt">分红政策</span>
      </p>
      <p class="box-text">{{textList.dividendPolicy}}</p>
    </div>
    <!--业绩比较基准-->
    <div class="content-box ">
      <p class="item-title">
        <span class="label-txt">业绩比较基准</span>
      </p>
      <p class="box-text">{{textList.baseline}}</p>
    </div>
    <!--风险收益特征-->
    <div class="content-box">
      <p class="item-title">
        <span class="label-txt">风险收益特征</span>
      </p>
      <p class="box-text">{{textList.riskFeature}}</p>
    </div>
  </div>
</template>

<script>
//  import * as api from '@/api/api'
  export default {
    name: 'index',
    data () {
      return {
        textList: {
          "fullName":"富兰克林国海潜力组合混合型证券投资基金",
          "forShort":"国富潜力组合混合A",
          "fundCode":"450003（前端）",
          "fundType":"混合型",
          "publishDate":"2007年03月15日",
          "foundDateScale":"2007年03月22日 / 87.569亿份",
          "assetsScale":"14.40亿元（截止至：2017年12月31日）",
          "shareScale":"12.4354亿份（截止至：2017年09月30日）",
          "fundCustodian":"国海富兰克林基金",
          "fundTrustee":"中国银行",
          "manager":"徐荔蓉",
          "historicalDividend":"每份累计0.84元（7次）",
          "administrativeFee":"1.50%（每年）",
          "trusteeFee":"0.25%（每年）",
          "serviceFee":"---（每年）",
          "maxSalesCharge":"1.20%（前端）",
          "maxBuyCharge":"天天基金优惠费率：0.15%（前端）",
          "maxRedemptionFee":"0.60%（前端）",
          "baseline":"85% X MSCI中国A股指数+ 10% X中债国债总指数(全价)+5% X同业存款息率",
          "trackTarget":"该基金无跟踪标的",
          "investGoal":"注重基金资产长期增值,投资未来收益具有成长性和资产价值低估的上市公司股票,为投资者赚取长期稳定的资本增值",
          "riskFeature":"本基金是混合型基金,风险高于货币市场基金和债券型基金,属于较高风险、较高预期收益的证券投资基金。",
          "dividendPolicy":"1、基金收益分配采用现金方式与红利再投资,投资者可选择现金红利或将获取的现金红利按除息日的基金份额净值自动转为基金份额进行再投资;基金份额持有人事先未做出选择的,默认的分红方式为现金红利; 2、同类类别内的每一基金份额享有同等分配权; 3、基金当期收益先弥补前期亏损后,方可进行当期收益分配; 4、A 类-人民币基金份额基金收益分配后每份基金份额的净值不能低于A 类-人民币基金份额面值;H 类-人民币基金份额基金收益分配后每份基金份额的净值不能低于H 类-人民币基金份额面值;H 类-美元基金份额基金收益分配后每份基金份额的净值不能低于H 类-美元基金份额面值;H 类-港币基金份额基金收益分配后每份基金份额的净值不能低于H 类-港币基金份额面值;5、如果基金当期出现亏损,则不进行收益分配; 6、在符合有关基金分红条件的前提下,基金收益分配每年至多4次; 7、全年基金收益分配比例不得低于年度基金已实现净收益的75%。基金合同生效不满三个月,收益可不分配; 8、法律法规或监管机构另有规定的,从其规定。",
          "investStrategy":"本基金采用“自下而上”的组合构建方法,从上市公司的具体发展前景和未来的盈利分析,到行业的发展趋势,再到宏观经济形势,确定大类资产的配置。 在运用了“自下而上”策略之后,根据市场环境的变化、市场出现的各种套利机会和未来的发展趋势判断,确定本基金资产配置最终的选择标准。 1、股票选择 本基金在学习和借用富兰克林邓普顿基金集团潜力组合基金管理经验的基础上,科学制定规范的股票选择流程 2、资产配置 在具体的资产配置过程中,本基金采用“自上而下”的资产配置方法,即通过深入的数量化分析和基本面研究,最大程度地排除市场波动对基金收益的负面影响,并充分利用市场上涨的动力借以获取资产配置所带来的超额回报。在资产配置过程中,本基金将通过对宏观经济的分析,市场风险的观察及相对价值指标的评估进行股票仓位的调整和板块配置的调整。 3、债券投资策略 本基金的债券投资为股票投资由于市场条件所限,不易实施预定投资策略时,使部分资产保值增值的防守性措施。",
          "investRange":"本基金的投资范围为国内依法公开发行的股票、债券以及中国证券监督管理委员会允许基金投资的其他金融工具，其中，股票投资范围包括所有在国内依法公开发行上市的A股；债券投资范围包括国内国债、金融债、企业债和可转换债券等。",
          "investIdea":["寻找具有良好成长性的行业和个股机会","在考虑业绩成长性的基础上合理评估公司价值","平衡收益/风险以获取安全回报","平衡上市公司的合理价值和成长性"]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .details-one .table-one {
    width: 100%;
  }
  .details-one .table-one tr td {
    color: #333;
    font-size: 14px;
    padding-left: 20px;
    border: 1px solid #dfe0e2;
  }
  .details-one .table-one tr td:nth-child(odd) {
    width: 140px;
    height: 50px;
    box-sizing: border-box;
    background: #f2f4f9;
  }
  .details-one .describe {
    padding: 20px;
    color: #333;
  }
  .details-one .content-box {
    margin: 20px 0 30px
  }
  .details-one .content-box .box-text {
    padding-left: 20px;
    line-height: 25px
  }
  .details-one .content-box .line-ul {
    display: flex;
    flex-direction: row;
  }
  .details-one .content-box .line-ul li {
    list-style: disc;
    margin-left: 40px;
  }
</style>
