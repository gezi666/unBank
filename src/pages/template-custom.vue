<template>
  <div class="template-wrap">
    <p class="page-tab-title">模板自定义</p>
    <div class="content-wrap">
      <div class="select-wrap">
        <div class="name-wrap">
          <span class="label">模板名称：</span>
          <input type="text" class="name-input">
        </div>
        <div class="type-wrap">
          <span class="label">基金类别：</span>
          <el-select v-model="typeValue" placeholder="请选择" popper-class="fund-type-select">
            <el-option
              v-for="(item,index) in typeOptions"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="temp-wrap">
        <DiyTemplate>
          <div class="temp-content" :slot="tempOrder[0]">
            <div class="first-col sort-con">
              <span class="index">{{tempOrder[0]}}</span>
              <div class="sort-wrap">
                <span class="sort-item to-up" ref="up" @click="toUp(0)" title="上移"></span>
                <span class="sort-item to-down" ref="down" @click="toDown(0)" title="下移"></span>
                <span class="sort-item to-top" ref="top" @click="toTop(0)" title="置顶"></span>
                <span class="sort-item to-bottom" ref="bottom" @click="toBottom(0)" title="置底"></span>
              </div>
            </div>
            <div class="configure-wrap">
              <span class="configure-name">公司规模(亿元)：</span>
              <div class="configure-info-wrap">
                <el-slider v-model="configureList.sizeRange.range" range :min="configureList.sizeRange.min" :max="configureList.sizeRange.max"></el-slider>
              </div>
            </div>
          </div>
          <div class="temp-content" :slot="tempOrder[1]">
            <div class="first-col sort-con">
              <span class="index">{{tempOrder[1]}}</span>
              <div class="sort-wrap">
                <span class="sort-item to-up" ref="up" @click="toUp(1)" title="上移"></span>
                <span class="sort-item to-down" ref="down" @click="toDown(1)" title="下移"></span>
                <span class="sort-item to-top" ref="top" @click="toTop(1)" title="置顶"></span>
                <span class="sort-item to-bottom" ref="bottom" @click="toBottom(1)" title="置底"></span>
              </div>
            </div>
            <div class="configure-wrap">
              <span class="configure-name">评级机构：</span>
              <div class="configure-info-wrap">
                <ul class="select-list">
                  <li :class="['select-item',configureList.ratingAgencies == index ? 'active' : '']" v-for="(item,index) in ratingAgenciesList" @click="configureList.ratingAgencies = index">{{item}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="temp-content" :slot="tempOrder[2]">
            <div class="first-col sort-con">
              <span class="index">{{tempOrder[2]}}</span>
              <div class="sort-wrap">
                <span class="sort-item to-up" ref="up" @click="toUp(2)" title="上移"></span>
                <span class="sort-item to-down" ref="down" @click="toDown(2)" title="下移"></span>
                <span class="sort-item to-top" ref="top" @click="toTop(2)" title="置顶"></span>
                <span class="sort-item to-bottom" ref="bottom" @click="toBottom(2)" title="置底"></span>
              </div>
            </div>
            <div class="configure-wrap">
              <span class="configure-name">舆情影响因素：</span>
              <div class="configure-info-wrap">
                <ul class="select-list">
                  <li :class="['select-item',configureList.opinionFactors == index ? 'active' : '']" v-for="(item,index) in opinionFactorsList" @click="configureList.opinionFactors = index">{{item}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="temp-content" :slot="tempOrder[3]">
            <div class="first-col sort-con">
              <span class="index">{{tempOrder[3]}}</span>
              <div class="sort-wrap">
                <span class="sort-item to-up" ref="up" @click="toUp(3)" title="上移"></span>
                <span class="sort-item to-down" ref="down" @click="toDown(3)" title="下移"></span>
                <span class="sort-item to-top" ref="top" @click="toTop(3)" title="置顶"></span>
                <span class="sort-item to-bottom" ref="bottom" @click="toBottom(3)" title="置底"></span>
              </div>
            </div>
            <div class="configure-wrap">
              <span class="configure-name">经理累计从业时间(年)：</span>
              <div class="configure-info-wrap">
                <el-slider v-model="configureList.employTime.range" range :min="configureList.employTime.min" :max="configureList.employTime.max"></el-slider>
              </div>
            </div>
          </div>
          <div class="temp-content" :slot="tempOrder[4]">
            <div class="first-col sort-con">
              <span class="index">{{tempOrder[4]}}</span>
              <div class="sort-wrap">
                <span class="sort-item to-up" ref="up" @click="toUp(4)" title="上移"></span>
                <span class="sort-item to-down" ref="down" @click="toDown(4)" title="下移"></span>
                <span class="sort-item to-top" ref="top" @click="toTop(4)" title="置顶"></span>
                <span class="sort-item to-bottom" ref="bottom" @click="toBottom(4)" title="置底"></span>
              </div>
            </div>
            <div class="configure-wrap">
              <span class="configure-name">经理平均管理规模(亿元)：</span>
              <div class="configure-info-wrap">
                <el-slider v-model="configureList.manageScale.range" range :min="configureList.manageScale.min" :max="configureList.manageScale.max"></el-slider>
              </div>
            </div>
          </div>
          <div class="temp-content" :slot="tempOrder[5]">
            <div class="first-col sort-con">
              <span class="index">{{tempOrder[5]}}</span>
              <div class="sort-wrap">
                <span class="sort-item to-up" ref="up" @click="toUp(5)" title="上移"></span>
                <span class="sort-item to-down" ref="down" @click="toDown(5)" title="下移"></span>
                <span class="sort-item to-top" ref="top" @click="toTop(5)" title="置顶"></span>
                <span class="sort-item to-bottom" ref="bottom" @click="toBottom(5)" title="置底"></span>
              </div>
            </div>
            <div class="configure-wrap">
              <span class="configure-name">经理投资风格：</span>
              <div class="configure-info-wrap style-wrap">
                <div class="group-wrap">
                  <div class="checkbox-wrap">
                    <el-checkbox-group v-model="investStyleGroup">
                      <el-checkbox-button v-for="item in 9" :label="item" :key="item"></el-checkbox-button>
                    </el-checkbox-group>
                  </div>
                  <ul class="pan-list">
                    <li>大盘</li>
                    <li>中盘</li>
                    <li>小盘</li>
                  </ul>
                </div>
                <ul class="type-list">
                  <li>价值型</li>
                  <li>平衡型</li>
                  <li>成长型</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="temp-content" :slot="tempOrder[6]">
            <div class="first-col sort-con">
              <span class="index">{{tempOrder[6]}}</span>
              <div class="sort-wrap">
                <span class="sort-item to-up" ref="up" @click="toUp(6)" title="上移"></span>
                <span class="sort-item to-down" ref="down" @click="toDown(6)" title="下移"></span>
                <span class="sort-item to-top" ref="top" @click="toTop(6)" title="置顶"></span>
                <span class="sort-item to-bottom" ref="bottom" @click="toBottom(6)" title="置底"></span>
              </div>
            </div>
            <div class="configure-wrap">
              <span class="configure-name">月收益平均范围(%)：</span>
              <div class="configure-info-wrap">
                <el-slider v-model="configureList.monthlyAverageRange.range" range :min="configureList.monthlyAverageRange.min" :max="configureList.monthlyAverageRange.max"></el-slider>
              </div>
            </div>
          </div>
          <div class="temp-content" :slot="tempOrder[7]">
            <div class="first-col sort-con">
              <span class="index">{{tempOrder[7]}}</span>
              <div class="sort-wrap">
                <span class="sort-item to-up" ref="up" @click="toUp(7)" title="上移"></span>
                <span class="sort-item to-down" ref="down" @click="toDown(7)" title="下移"></span>
                <span class="sort-item to-top" ref="top" @click="toTop(7)" title="置顶"></span>
                <span class="sort-item to-bottom" ref="bottom" @click="toBottom(7)" title="置底"></span>
              </div>
            </div>
            <div class="configure-wrap">
              <span class="configure-name">持仓股比例范围(%)：</span>
              <div class="configure-info-wrap">
                <el-slider v-model="configureList.holdingSharesRange.range" range :min="configureList.holdingSharesRange.min" :max="configureList.holdingSharesRange.max"></el-slider>
              </div>
            </div>
          </div>
          <div class="temp-content" :slot="tempOrder[8]">
            <div class="first-col sort-con">
              <span class="index">{{tempOrder[8]}}</span>
              <div class="sort-wrap">
                <span class="sort-item to-up" ref="up" @click="toUp(8)" title="上移"></span>
                <span class="sort-item to-down" ref="down" @click="toDown(8)" title="下移"></span>
                <span class="sort-item to-top" ref="top" @click="toTop(8)" title="置顶"></span>
                <span class="sort-item to-bottom" ref="bottom" @click="toBottom(8)" title="置底"></span>
              </div>
            </div>
            <div class="configure-wrap">
              <p class="configure-name">
                <span class="fl">偏向行业：</span>
              </p>
              <div class="configure-info-wrap industry-wrap">
                <el-checkbox-group v-model="industrySelectList">
                  <el-checkbox-button v-for="item in industryList" :label="item" :key="item" :title="item">{{item | longTxt}}</el-checkbox-button>
                </el-checkbox-group>
              </div>
            </div>
          </div>
        </DiyTemplate>
        <div class="btn-line">
          <span class="btn delete" @click="delTemplate">删除</span>
          <span class="btn save" @click="saveTemplate">保存</span>
          <span class="btn cancel" @click="cancelTemplate">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DiyTemplate from 'components/diy-template'
  export default {
    name: 'TemplateCustom',
    data(){
      return {
        typeValue:'',
        tempOrder:[1,2,3,4,5,6,7,8,9],    //模板顺序
        typeOptions:["低风险","中低风险","中风险","中高风险","高风险"],
        ratingAgenciesList:["天相评级","晨星","银河"],
        opinionFactorsList:["负面","正面"],
        investStyleGroup:[1,2,6],
        industryList:["制造业","金融业","服务业","交通运输","批发零售零售","采矿业"],
        industrySelectList:["制造业","服务业","采矿业"],
        configureList:{
          "ratingAgencies": 0,    //评级机构：0--天相评级；1--晨星；2--银河
          "opinionFactors": 0,    //舆情影响因素：0--负面；1--正面
//          "investStyle": ["00","11","21"],    //经理投资风格：00--大盘-价值型；01--大盘-平衡型；02--大盘-成长型;10--中盘-价值型；11--中盘-平衡型；12--中盘-成长型;20--小盘-价值型；21--小盘-平衡型；22--小盘-成长型
          "investStyle": [1,2],    //经理投资风格：1--大盘-价值型；2--大盘-平衡型；3--大盘-成长型;4--中盘-价值型；5--中盘-平衡型；6--中盘-成长型;7--小盘-价值型；8--小盘-平衡型；9--小盘-成长型
          "sizeRange":{          //公司规模(亿元)
            "min":0.17,
            "max":500,
            "range":[50,200]
          },
          "employTime":{        //经理累计从业时间(年)
            "min":0,
            "max":10,
            "range":[1,8]
          },
          "manageScale":{        //经理平均管理规模(亿元)
            "min":0,
            "max":100,
            "range":[10,70]
          },
          "monthlyAverageRange":{        //月收益平均范围(%)
            "min":0,
            "max":10,
            "range":[2.30,5.41]
          },
          "holdingSharesRange":{        //持仓股比例范围(%)
            "min":0,
            "max":100,
            "range":[72,90]
          },
          "biasIndustry": [                  //偏向行业
            {
              "industryName":"制造业",
              "IFOIndex":185
            },
            {
              "industryName":"金融业",
              "IFOIndex":150
            },
            {
              "industryName":"服务业",
              "IFOIndex":120
            },
            {
              "industryName":"交通运输",
              "IFOIndex":120
            },
            {
              "industryName":"批发零售",
              "IFOIndex":100
            },
            {
              "industryName":"采矿业",
              "IFOIndex":80
            }
          ],
          "updateTime":"2017-09-30"
        },
      }
    },
    mounted(){
    },
    methods:{
      toUp(n){
        if(this.tempOrder[n] == 1) return
        let order = this.tempOrder.indexOf(this.tempOrder[n]-1)
        this.tempOrder[n] --
        this.tempOrder[order] ++
        this.$forceUpdate()
      },
      toDown(n){
        if(this.tempOrder[n] == 9) return
        let order = this.tempOrder.indexOf(this.tempOrder[n]+1)
        this.tempOrder[n] ++
        this.tempOrder[order] --
        this.$forceUpdate()
      },
      toTop(n){
        let _this = this
        if(_this.tempOrder[n] == 1) return
        for(let i = _this.tempOrder[n] -1;i>0;i--){
          let order = _this.tempOrder.indexOf(i)
          _this.tempOrder[order] ++
        }
        _this.tempOrder[n] = 1
        _this.$forceUpdate()
      },
      toBottom(n){
        let _this = this
        if(_this.tempOrder[n] == 9) return
        for(let i = _this.tempOrder[n] +1;i<=9;i++){
          let order = _this.tempOrder.indexOf(i)
          _this.tempOrder[order] --
        }
        _this.tempOrder[n] = 9
        _this.$forceUpdate()
      },
      delTemplate(){
        this.$router.go(-1)
      },
      saveTemplate(){
        this.$router.go(-1)
      },
      cancelTemplate(){
        this.$router.go(-1)
      }
    },
    filters:{
      longTxt(val){
        return val.length > 5 ? val.substring(0,4)+'...' : val
      }
    },
    components:{
      DiyTemplate
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";
  .content-wrap{
    padding: $padding-side {
      top: 0;
    };
  }
  .label{
    font-size: 14px;
    color: #666;
  }
  .name-input{
    box-sizing: border-box;
    width: 320px;
    height: 36px;
    padding-left: 10px;
    @include default-border(#678db4);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    &:hover{
      border-color: #c0c4cc;
    }
    &:focus{
      border-color: #409EFF;
    }
  }
  .select-wrap{
    box-sizing: border-box;
    padding-left: 20px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .name-wrap{
      margin-right: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .el-select{
      width: 320px;
    }
    .el-input__inner{
      border-color: #678db4;
    }
  }
  .temp-wrap{
    .temp-content{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
    }
    .sort-con,.configure-wrap{
      box-sizing: border-box;
      padding: 0 20px;
      text-align: left;
    }
    .first-col{
      width: 266px;
      flex: none;
    }
    .sort-con{
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .index{
      flex: none;
      margin-right: 60px;
    }
    .sort-wrap{
      flex: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .sort-item{
      cursor: pointer;
      display: inline-block;
      width: 26px;
      height: 26px;
    }
    .to-up{
      background: url('~assets/img/to-up-ico.png') center no-repeat;
      &:hover{
        background: url('~assets/img/to-up-ac-ico.png') center no-repeat;
      }
    }
    .to-down{
      background: url('~assets/img/to-down-ico.png') center no-repeat;
      &:hover{
        background: url('~assets/img/to-down-ac-ico.png') center no-repeat;
      }
    }
    .to-top{
      background: url('~assets/img/to-top-ico.png') center no-repeat;
      &:hover{
        background: url('~assets/img/to-top-ac-ico.png') center no-repeat;
      }
    }
    .to-bottom{
      background: url('~assets/img/to-bottom-ico.png') center no-repeat;
      &:hover{
        background: url('~assets/img/to-bottom-ac-ico.png') center no-repeat;
      }
    }
    .configure-wrap{
      flex: auto;
      min-height: 120px;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
    }
    .configure-name{
      width: 160px;
      flex: none;
      align-self: center;
    }
    .configure-info-wrap{
      flex: auto;
      padding: 0 24px 0 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .style-wrap{
      padding-top: 20px;
      padding-bottom: 10px;
      flex-direction: column;
      align-items: flex-start;
    }
    .group-wrap{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .checkbox-wrap{
      width: 210px;
      flex: none;
    }
    .pan-list{
      li{
        width: 50px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: #666;
      }
    }
    .type-list{
      flex: none;
      display: flex;
      justify-content: flex-start;
      align-self: flex-start;
      li{
        width: 70px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: #666;
      }
    }
    .el-slider{
      flex: auto;
    }
    .select-list{
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .select-item{
      cursor: pointer;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 28px;
      margin-right: 20px;
      @include default-border;
      &:last-child{
        margin-right: 0;
      }
      &:hover,&.active{
        @include btn-ac
      }
    }
    .btn-line{
      margin: 40px 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn{
      cursor: pointer;
      width: 98px;
      height: 28px;
      color: $btn-ac-bg;
      display: flex;
      justify-content: center;
      align-items: center;
      @include default-border;
      &:hover{
        @include btn-ac;
      }
    }
    .save{
      margin: 0 20px;
      @include btn-ac;
      &:hover{
        opacity: .9;
      }
    }
  }
</style>
