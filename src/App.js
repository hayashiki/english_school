import React, { Component } from "react";
import _ from "lodash";
import { firebaseDb } from "./firebase/";
import "./App.css";

const ref = firebaseDb.ref('contact');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      tel: "",
      content: ""
    }

    _.forEach([
        '_hundleSubmit',
        '_handleChange'
    ], (method) => {
        this[method] = this[method].bind(this);
    });
  }

  _hundleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({subscribedToMailingList: true}, this.state);
    ref.push(user)
  }

  _handleChange(field) {
    return (e) => {
     this.setState({ [field]: e.currentTarget.value });
   };
  }

  render() {
    return (
      <div id="container">
        <header>
          <img className="header__logo" src="images/logo.png" alt="" />
          <div className="header__title">
            <div onClick={this._hundleSubmit}>ベネッセこども英語教室</div>
            <div className="header__classname">松江教室 英会話のP.E.C</div>
          </div>
          <div className="header__info">
            <p><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>TEL: 0852-21-1802</p>
            <p>受付: 10:00 ~ 17:00</p>
          </div>
        </header>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="row">
              <div className="col-md-2 nav-item">
                <a href="#characteristic">
                  <div className="nav-characteristic nav-active">
                    <b>特色・こだわり</b>
                    <small>characteristic</small>
                  </div>
                </a>
              </div>
              <div className="col-md-2 nav-item">
                <a href="#courses">
                  <div className="nav-courses">
                    <b>コース</b>
                    <small>courses</small>
                  </div>
                </a>
              </div>
              <div className="col-md-2 nav-item">
                <a href="#expense">
                  <div className="nav-expense">
                    <b>受講費</b>
                    <small>expense</small>
                  </div>
                </a>
              </div>
              <div className="col-md-2 nav-item">
                <a href="#becoming">
                  <div className="nav-becoming">
                    <b>入会までの流れ</b>
                    <small>becoming</small>
                  </div>
                </a>
              </div>
              <div className="col-md-2 nav-item">
                <a href="#classroom">
                  <div className="nav-classroom">
                    <b>教室案内</b>
                    <small>classroom</small>
                  </div>
                </a>
              </div>
              <div className="col-md-2 nav-item">
                <a href="#inquiry">
                  <div className="nav-inquiry">
                    <b>お申込み・お問い合わせ</b>
                    <small>inquiry</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div id="show" className="row">
          <img src="images/image-4.png" className="col-md-6 show__image" alt="" />
          <img src="images/image-1.jpg" className="col-md-6 show__image" alt="" />
        </div>
        <div id="characteristic">
          <div className="characteristic__header">
            <b>特色・こだわり</b>
            <small>characteristic</small>
          </div>
          <div className="row characteristic__content">
            <div className="col-md-6 characteristic__comments">
              <div className="characteristic__comments--title"><b>イード・アワード賞にて顧客満足度で部門賞を獲得しました！</b></div>
              <p>イード・アワード2016 こども英語教室 顧客満足度（幼児の部）</p>
              <p>先生がよい英語教室 部門賞</p>
              <p>効果がある英語教室 部門賞</p>
              <p>コスパのよい英語教室 部門賞</p>
              <p><a href="http://www.iid.co.jp/"><b>受賞結果はこちら</b></a>（外部サイト: 株式会社イード ホームページ）</p>
              <br />
              <div className="characteristic__comments--title"><b>「英語が楽しい」「もっと話したい」という意欲を育む</b></div>
              <p>英会話の主役は講師ではなく、子どもたち。「フレーズを覚えて・繰り返す」だけではなく、「理解した言い方を、自分の言いたいことで使ってみる」体験が重要です。その時期の子どもの興味・関心、動機づけを深く理解したレッスンがここにあります。</p>
            </div>
            <div className="col-md-6 characteristic__image">
              <img src="images/image-5.png" className="characteristic__image--view" alt="" />
            </div>
          </div>
        </div>
        <div id="courses">
          <div className="courses__header">
            <b>コース</b>
            <small>courses</small>
          </div>
          <div className="courses__content">
            <div className="row">
              <div className="col-md-4 courses__card">
                <div className="courses__card--header">
                  <div className="courses__card--title">
                    <div className="courses__card--type courses--kids">
                      <b>Kidsコース</b>
                      <b>幼児（３〜６歳）</b>
                    </div>
                    <div className="courses__card--text">
                      <b>しまじろうと一緒に英語耳を育てる</b>
                    </div>
                  </div>
                  <img src="images/icon-1.jpg" className="courses__card--image" alt="" />
                </div>
                <div className="courses__card--content">
                  聴覚機能が完成する小学校低学年ごろまでに、たくさんの英語を聞いたり話したりすることで英語独自の音やリズムが聞き取れる「英語耳」を育てることができます。
                </div>
              </div>
              <div className="col-md-4 courses__card">
                <div className="courses__card--header">
                  <div className="courses__card--title">
                    <div className="courses__card--type courses--elementary">
                      <b>Elementaryコース</b>
                      <b>小学１・２年生</b>
                    </div>
                    <div className="courses__card--text">
                      <b>英語で聞く・話すの土台を作る</b>
                    </div>
                  </div>
                  <img src="images/icon-2.jpg" className="courses__card--image" alt="" />
                </div>
                <div className="courses__card--content">
                  レッスンには、身近な学校を舞台にしたストーリーやゲームで、子どもたちの「言いたい」「聞きたい」「やりたい」気持ちを引き出すしかけがもりだくさんです。
                </div>
              </div>
              <div className="col-md-4 courses__card">
                <div className="courses__card--header">
                  <div className="courses__card--title">
                    <div className="courses__card--type courses--intermediate">
                      <b>Intermediateコース</b>
                      <b>小学３・４年生</b>
                    </div>
                    <div className="courses__card--text">
                      <b>英語で聞く・読む・話す・書く力を養う</b>
                    </div>
                  </div>
                  <img src="images/icon-3.png" className="courses__card--image" alt="" />
                </div>
                <div className="courses__card--content">
                  型にはまった会話練習ではなく、「知りたいことを聞き」「伝えたいことを話す」形式のペアワークや意見の発表で英語の生きたコミュニケーションを体感できます。
                </div>
              </div>
              <div className="col-md-4 courses__card">
                <div className="courses__card--header">
                  <div className="courses__card--title">
                    <div className="courses__card--type courses--advanced">
                      <b>Advancedコース</b>
                      <b>小学５・６年生</b>
                    </div>
                    <div className="courses__card--text">
                      <b>自分の言いたいことを英語で表現できる</b>
                    </div>
                  </div>
                  <img src="images/icon-4.png" className="courses__card--image" alt="" />
                </div>
                <div className="courses__card--content">
                  キーワードは「対話重視」。これからの中学英語で求められる力を、小学校のうちから鍛えます。
                </div>
              </div>
              <div className="col-md-4 courses__card">
                <div className="courses__card--header">
                  <div className="courses__card--title">
                    <div className="courses__card--type courses--teens">
                      <b>Teensコース</b>
                      <b>中学１・２年生</b>
                    </div>
                    <div className="courses__card--text">
                      <b>ナチュラルスピードの英語に対応し、文法知識も定着する</b>
                    </div>
                  </div>
                  <img src="images/icon-5.jpg" className="courses__card--image" alt="" />
                </div>
                <div className="courses__card--content">
                  ナチュラルスピードの英語を聞き取り、とっさに返事ができ、言いたいことを表現できる「英語の瞬発力」を鍛えます。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="expense">
          <div className="expense__header--wrapper">
            <div className="expense__header">
              <b>受講費</b>
              <small>expense</small>
            </div>
            <div className="expense__header--notify">入会金 5,000円(+税)</div>
          </div>
          <div className="expense__content">
            <div className="row">
              <div className="col-md-4">
                <div className="expense__card expense__card--kids">
                  <div className="expense__card--title expense__title--kids">
                    <b>Kidsコース 幼児（３〜６歳）</b>
                  </div>
                  <div className="expense__card--content">
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>１回５０分・全４２回 </b></li>
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>受講費</b>（月）5,500円（＋税）</li>
                  </div>
                  <div className="expense__card--table">
                    <table className="table no-margin">
                      <tr>
                        <th><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>教材費</th>
                        <td>４月〜８月入会</td>
                        <td>９月〜１２月入会</td>
                        <td>１月〜３月入会</td>
                      </tr>
                      <tr>
                        <td><b>ベーシック</b></td>
                        <td>15,915円（＋税）</td>
                        <td>11,343円（＋税）</td>
                        <td>8,677円（＋税）</td>
                      </tr>
                      <tr>
                        <td><b>スター/レインボー</b></td>
                        <td>15,915円（＋税）</td>
                        <td>11,343円（＋税）</td>
                        <td>8,677円（＋税）</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="expense__card expense__card--elementary">
                  <div className="expense__card--title expense__title--elementary">
                    <b>Elementaryコース 小学１・２年生</b>
                  </div>
                  <div className="expense__card--content">
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>１回６０分・全４２回 </b></li>
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>受講費</b>（月）6,000円（＋税）</li>
                  </div>
                  <div className="expense__card--table">
                    <table className="table no-margin">
                      <tr>
                        <th><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>教材費</th>
                        <td>４月〜８月入会</td>
                        <td>９月〜１２月入会</td>
                        <td>１月〜３月入会</td>
                      </tr>
                      <tr>
                        <td><b>ベーシック</b></td>
                        <td>18,080円（＋税）</td>
                        <td>12,300円（＋税）</td>
                        <td>6,700円（＋税）</td>
                      </tr>
                      <tr>
                        <td><b>プログレッシブ</b></td>
                        <td>18,080円（＋税）</td>
                        <td>12,100円（＋税）</td>
                        <td>6,300円（＋税）</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="expense__card expense__card--intermediate">
                  <div className="expense__card--title expense__title--intermediate">
                    <b>Intermediateコース 小学３・４年生</b>
                  </div>
                  <div className="expense__card--content">
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>１回６０分・全４２回 </b></li>
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>受講費</b>（月）6,000円（＋税）</li>
                  </div>
                  <div className="expense__card--table">
                    <table className="table no-margin">
                      <tr>
                        <th><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>教材費</th>
                        <td>４月〜８月入会</td>
                        <td>９月〜１２月入会</td>
                        <td>１月〜３月入会</td>
                      </tr>
                      <tr>
                        <td><b>ベーシック</b></td>
                        <td>18,080円（＋税）</td>
                        <td>12,300円（＋税）</td>
                        <td>6,700円（＋税）</td>
                      </tr>
                      <tr>
                        <td><b>プログレッシブ</b></td>
                        <td>18,080円（＋税）</td>
                        <td>12,180円（＋税）</td>
                        <td>6,280円（＋税）</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="expense__card expense__card--advanced">
                  <div className="expense__card--title expense__title--advanced">
                    <b>Advancedコース 小学５・６年生</b>
                  </div>
                  <div className="expense__card--content">
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>１回６０分・全４２回 </b></li>
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>受講費</b>（月）6,000円（＋税）</li>
                  </div>
                  <div className="expense__card--table">
                    <table className="table no-margin">
                      <tr>
                        <th><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>教材費</th>
                        <td>４月〜８月入会</td>
                        <td>９月〜１２月入会</td>
                        <td>１月〜３月入会</td>
                      </tr>
                      <tr>
                        <td><b>ベーシック</b></td>
                        <td>18,080円（＋税）</td>
                        <td>9,940円（＋税）</td>
                        <td>6,940円（＋税）</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="expense__card expense__card--teens">
                  <div className="expense__card--title expense__title--teens">
                    <b>Teensコース 中学１・２年生</b>
                  </div>
                  <div className="expense__card--content">
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>１回７０分・全４２回 </b></li>
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>受講費</b>（月）7,000円（＋税）</li>
                  </div>
                  <div className="expense__card--table">
                    <table className="table no-margin">
                      <tr>
                        <th><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>教材費</th>
                        <td>４月〜８月入会</td>
                        <td>９月〜１２月入会</td>
                        <td>１月〜３月入会</td>
                      </tr>
                      <tr>
                        <td><b>ベーシック</b></td>
                        <td>8,296円〜12,968円（＋税）</td>
                        <td>11,343円（＋税）</td>
                      </tr>
                      <tr>
                        <td><b>アドバンス</b></td>
                        <td>8,000円（＋税）</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="becoming">
          <div className="becoming__header">
            <b>入会までの流れ</b>
            <small>becoming</small>
          </div>
          <div className="becoming__content">
            <div className="becoming__flow">
              <div className="becoming__step">
                <b className="becoming__step--title">STEP.1  お問い合わせ</b>
                <div className="becoming__step--text">
                  <p>ホームページまたはお電話で、体験レッスンをお申込み下さい。</p>
                  <p>体験レッスンは無料です。</p>
                </div>
              </div>
              <div className="becoming__step">
                <b className="becoming__step--title">STEP.2  無料体験レッスンに参加</b>
                <div className="becoming__step--text">
                  <p>体験レッスンで****を実感して下さい。</p>
                  <p>ご参加頂いた際に、受講システムのご説明・入会手続きのご案内をいたします。</p>
                </div>
              </div>
              <div className="becoming__step">
                <b className="becoming__step--title">STEP.3  入会のお申込み</b>
                <div className="becoming__step--text">
                  <p>入会申込書をご提出下さい。</p>
                </div>
              </div>
              <div className="becoming__step">
                <b className="becoming__step--title">STEP.4  レッスン開始</b>
                <div className="becoming__step--text">
                  <p>教室に通うのは週に１回。「楽しい英語時間」がスタートします！</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="classroom">
          <div className="classroom__header">
            <b>教室案内</b>
            <small>classroom</small>
          </div>
          <div className="row classroom__content">
            <div className="col-md-6 classroom__info">
              <div className="classroom__address">
                <p>松江教室</p>
                <p>住所</p>
                <p>〒 609-0826 島根県松江市学園2丁目5-13</p>
                <p>TEL 123-456-789</p>
              </div>
              <div className="classroom__teacher--info">
                <p><b>We look forward to welcoming you!</b></p>
                <p><b>私達がお待ちしています!</b></p>
              </div>
              <div className="row">
                <div className="col-md-6 classroom__teacher--container">
                  <img src="images/teacher-1.jpg" alt="" />
                </div>
                <div className="col-md-6 classroom__teacher--container">
                  <img src="images/teacher-2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 classroom__map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1624.6210963215506!2d133.06503445690916!3d35.47355108024328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35570457cf3b947f%3A0x56014f5ff2b158b3!2z44CSNjkwLTA4MjYg5bO25qC555yM5p2-5rGf5biC5a2m5ZyS5Y2X77yS5LiB55uu77yV4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1491888918135"
                width="90%"
                height="500"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
        <div id="inquiry">
          <div className="row">
            <div className="col-md-6 no-padding">
              <div className="inquiry__header">
                <b>お申込み・お問い合わせ</b>
                <small>inquiry</small>
              </div>
              <div className="inquiry__content">
                <div className="inquiry__info">
                  <p>お電話でのお問い合わせはこちら</p>
                  <p><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>1234-567-890</p>
                  <p>受付：10:00 〜 17:00（土日・祝日・年末年始を除く）</p>
                </div>
                <div>
                  <div className="inquiry__lesson">
                    <div className="inquiry__trial"><b>無料体験</b></div>
                    <div className="inquiry__apply"><b>レッスン申し込み</b></div>
                  </div>
                  <div className="inquiry__document">
                    <b>Benesseこども教室の松江教室を運営する株式会社P.E.Cでは日英・英日翻訳の業務も承っております。</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 inquiry__form--wrapper">
              <form className="inquiry__form">
                <input
                  className="inquiry__form--input"
                  type="text"
                  placeholder="*お名前"
                  value={ this.state.username }
                  onChange={ this._handleChange("username") }
                  required />
                <input
                  className="inquiry__form--input"
                  type="email"
                  placeholder="*E-mail"
                  value={ this.state.email }
                  onChange={ this._handleChange("email") }
                  required />
                <input
                  className="inquiry__form--input"
                  type="text"
                  value={ this.state.tel }
                  onChange={ this._handleChange("tel") }
                  placeholder="TEL" />
                <textarea
                  className="inquiry__form--input inquiry__form--textarea"
                  type="textarea"
                  placeholder="*お問い合わせ内容&#13;&#10;英語教室に関する疑問・質問をご入力下さい。&#13;&#10;翻訳業務に関するお問い合わせもこちらからどうぞ。"
                  value={ this.state.content }
                  onChange={ this._handleChange("content") }
                  required />
                <button className="inquiry__form--button" onClick={this._hundleSubmit}>送信</button>
              </form>
            </div>
          </div>
        </div>
        <footer>
          <p>Benesseこども英語教室 松江教室</p>
          <p>〒 609-0826 島根県松江市学園2丁目5-13 : TEL 0852-21-1802</p>
          <p>株式会社P.E.Cは株式会社ベネッセコーポレーションと提携してBenesseこども教室を運営しております。</p>
          <p>Copyright (c) P.E.C  All right reserved.</p>
        </footer>
      </div>
    );
  }
}
