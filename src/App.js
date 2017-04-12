import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <img className="logo" src="images/logo.png"></img>
          <div className="title">
            <div>Benesseこども英語教室</div>
            <div>松江教室 英会話のP.E.C</div>
          </div>
          <div className="information">TEL: 123-456-789受付10:00 ~ 17:00</div>
        </header>
        <nav>
          <a href="#characteristic"><div className="nav-characteristic">特色・こだわり</div></a>
          <a href="#courses"><div className="nav-courses">コース</div></a>
          <a href="#expense"><div className="nav-expense">受講費</div></a>
          <a href="#becoming"><div className="nav-becoming">入会までの流れ</div></a>
          <a href="#classroom"><div className="nav-classroom">教室案内</div></a>
          <a href="#inquiry"><div className="nav-inquiry">お申込み・お問い合わせ</div></a>
        </nav>
        <div id="show">
          <img src="images/image-4.png" className="show__image" />
          <img src="images/image-1.jpg" className="show__image" />
        </div>
        <div id="characteristic">
          <div className="characteristic__header">
            <b>特色・こだわり</b>
            <small>characteristic</small>
          </div>
          <div className="characteristic__content">
            <div className="characteristic__comments">
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
            <div className="characteristic__image">
              <img src="images/image-5.png" className="characteristic__image--view"></img>
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
                    <div className="courses__card--type">
                      <b>Kidsコース</b>
                      <b>幼児（３〜６歳）</b>
                    </div>
                    <div>
                      <b>しまじろうと一緒に英語耳を育てる</b>
                    </div>
                  </div>
                  <img src="images/image-3.jpg" className="courses__card--image" />
                </div>
                <div className="courses__card--content">
                  聴覚機能が完成する小学校低学年ごろまでに、たくさんの英語を聞いたり話したりすることで英語独自の音やリズムが聞き取れる「英語耳」を育てることができます。
                </div>
              </div>
              <div className="col-md-4 courses__card">
                <div className="courses__card--header">
                  <div className="courses__card--title">
                    <div className="courses__card--type">
                      <b>Kidsコース</b>
                      <b>幼児（３〜６歳）</b>
                    </div>
                    <div>
                      <b>しまじろうと一緒に英語耳を育てる</b>
                    </div>
                  </div>
                  <img src="images/image-3.jpg" className="courses__card--image" />
                </div>
                <div className="courses__card--content">
                  聴覚機能が完成する小学校低学年ごろまでに、たくさんの英語を聞いたり話したりすることで英語独自の音やリズムが聞き取れる「英語耳」を育てることができます。
                </div>
              </div>
              <div className="col-md-4 courses__card">
                <div className="courses__card--header">
                  <div className="courses__card--title">
                    <div className="courses__card--type">
                      <b>Kidsコース</b>
                      <b>幼児（３〜６歳）</b>
                    </div>
                    <div>
                      <b>しまじろうと一緒に英語耳を育てる</b>
                    </div>
                  </div>
                  <img src="images/image-3.jpg" className="courses__card--image" />
                </div>
                <div className="courses__card--content">
                  聴覚機能が完成する小学校低学年ごろまでに、たくさんの英語を聞いたり話したりすることで英語独自の音やリズムが聞き取れる「英語耳」を育てることができます。
                </div>
              </div>
              <div className="col-md-4 courses__card">
                <div className="courses__card--header">
                  <div className="courses__card--title">
                    <div className="courses__card--type">
                      <b>Kidsコース</b>
                      <b>幼児（３〜６歳）</b>
                    </div>
                    <div>
                      <b>しまじろうと一緒に英語耳を育てる</b>
                    </div>
                  </div>
                  <img src="images/image-3.jpg" className="courses__card--image" />
                </div>
                <div className="courses__card--content">
                  聴覚機能が完成する小学校低学年ごろまでに、たくさんの英語を聞いたり話したりすることで英語独自の音やリズムが聞き取れる「英語耳」を育てることができます。
                </div>
              </div>
              <div className="col-md-4 courses__card">
                <div className="courses__card--header">
                  <div className="courses__card--title">
                    <div className="courses__card--type">
                      <b>Kidsコース</b>
                      <b>幼児（３〜６歳）</b>
                    </div>
                    <div>
                      <b>しまじろうと一緒に英語耳を育てる</b>
                    </div>
                  </div>
                  <img src="images/image-3.jpg" className="courses__card--image" />
                </div>
                <div className="courses__card--content">
                  聴覚機能が完成する小学校低学年ごろまでに、たくさんの英語を聞いたり話したりすることで英語独自の音やリズムが聞き取れる「英語耳」を育てることができます。
                </div>
              </div>
              <div className="col-md-4 courses__card">
                <div className="courses__card--header">
                  <div className="courses__card--title">
                    <div className="courses__card--type">
                      <b>Kidsコース</b>
                      <b>幼児（３〜６歳）</b>
                    </div>
                    <div>
                      <b>しまじろうと一緒に英語耳を育てる</b>
                    </div>
                  </div>
                  <img src="images/image-3.jpg" className="courses__card--image" />
                </div>
                <div className="courses__card--content">
                  聴覚機能が完成する小学校低学年ごろまでに、たくさんの英語を聞いたり話したりすることで英語独自の音やリズムが聞き取れる「英語耳」を育てることができます。
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
            <div className="expense__header--notify">入会金 5,000円（＋税）</div>
          </div>
          <div className="expense__content">
            <div className="row">
              <div className="col-md-4">
                <div className="expense__card">
                  <div className="expense__card--title">
                    <b>Kidsコース 幼児（３〜６歳）</b>
                  </div>
                  <div className="expense__card--content">
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>１回５０分・全４２回</b></li>
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>受講費</b>（月）5,500円（＋税）</li>
                  </div>
                  <div className="expense__card--table">
                    <table className="table">
                      <tr>
                        <th><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>教材費</th>
                        <th>教材費</th>
                        <th>教材費</th>
                        <th>教材費</th>
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
                <div className="expense__card">
                  <div className="expense__card--title">
                    <b>Kidsコース 幼児（３〜６歳）</b>
                  </div>
                  <div className="expense__card--content">
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>１回５０分・全４２回</b></li>
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>受講費</b>（月）5,500円（＋税）</li>
                  </div>
                  <div className="expense__card--table">
                    <table className="table">
                      <tr>
                        <th><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>教材費</th>
                        <th>教材費</th>
                        <th>教材費</th>
                        <th>教材費</th>
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
                <div className="expense__card">
                  <div className="expense__card--title">
                    <b>Kidsコース 幼児（３〜６歳）</b>
                  </div>
                  <div className="expense__card--content">
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>１回５０分・全４２回</b></li>
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>受講費</b>（月）5,500円（＋税）</li>
                  </div>
                  <div className="expense__card--table">
                    <table className="table">
                      <tr>
                        <th><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>教材費</th>
                        <th>教材費</th>
                        <th>教材費</th>
                        <th>教材費</th>
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
                <div className="expense__card">
                  <div className="expense__card--title">
                    <b>Kidsコース 幼児（３〜６歳）</b>
                  </div>
                  <div className="expense__card--content">
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>１回５０分・全４２回</b></li>
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>受講費</b>（月）5,500円（＋税）</li>
                  </div>
                  <div className="expense__card--table">
                    <table className="table">
                      <tr>
                        <th><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>教材費</th>
                        <th>教材費</th>
                        <th>教材費</th>
                        <th>教材費</th>
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
                <div className="expense__card">
                  <div className="expense__card--title">
                    <b>Kidsコース 幼児（３〜６歳）</b>
                  </div>
                  <div className="expense__card--content">
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>１回５０分・全４２回</b></li>
                    <li className="expense__card--list"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><b>受講費</b>（月）5,500円（＋税）</li>
                  </div>
                  <div className="expense__card--table">
                    <table className="table">
                      <tr>
                        <th><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>教材費</th>
                        <th>教材費</th>
                        <th>教材費</th>
                        <th>教材費</th>
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
            </div>
          </div>
        </div>
        <div id="becoming">
          <div className="becoming__header">
            <b>入会までの流れ</b>
            <small>becoming</small>
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
              <div className="classroom__teacher--info"><b>講師紹介</b></div>
              <div className="row classroom__teachers">
                <div className="col-md-6 classroom__teacher">
                  <div className="classroom__teacher--image">
                    <img src="images/character.png" />
                  </div>
                  <div className="classroom__teacher--name">
                    <b>Sam Smith</b>
                  </div>
                </div>
                <div className="col-md-6 classroom__teacher">
                  <div className="classroom__teacher--image">
                    <img src="images/character.png" />
                  </div>
                  <div className="classroom__teacher--name">
                    <b>Masako Hayashida</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 classroom__map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1624.6210963215506!2d133.06503445690916!3d35.47355108024328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35570457cf3b947f%3A0x56014f5ff2b158b3!2z44CSNjkwLTA4MjYg5bO25qC555yM5p2-5rGf5biC5a2m5ZyS5Y2X77yS5LiB55uu77yV4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1491888918135"
                width="600"
                height="450"
                frameBorder="0"
                style={{border: "0"}}
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
              <div>
                <p>お電話でのお問い合わせはこちら</p>
                <p><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>1234-567-890</p>
                <p>受付：10:00 〜 17:00（土日・祝日・年末年始を除く）</p>
                <div>
                  <div></div>
                  <div></div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-md-6 inquiry__form">
              <form>
                <input type="text" />
              </form>
            </div>
          </div>


        </div>

        <footer>
          <div>Benesseこども英語教室 松江教室</div>
          <div>〒 609-0826 島根県松江市学園2丁目5-13 : TEL 123-456-789</div>
          <div>株式会社P.E.Cは株式会社ベネッセコーポレーションと提携してBenesseこども教室を運営しております。</div>
          <div>Copyright (c) P.E.C  All right reserved.</div>
        </footer>
      </div>
    );
  }
}

export default App;
