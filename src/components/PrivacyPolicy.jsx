import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { darken, lighten } from '@mui/system';


import '../App.css';

const H4 = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: darken('#7f7fff', 0.5),
        marginTop: '20px',
        marginBottom: '20px',
        padding: '10px',
      }}
    >
      <Typography variant="h4">{text}</Typography>
    </div>
  )
}


const H5 = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        marginTop: '20px',
        marginBottom: '4px',
        padding: '10px',
      }}
    >
      <Typography variant="h5">{text}</Typography>
    </div>
  )
}

const H6 = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginTop: '4px',
        marginBottom: '4px',
        paddingLeft: '30px',
      }}
    >
      <Typography variant="h6">{text}</Typography>
    </div>
  )
}



const B1 = ({ text }) => {
  return (
    <Typography variant="body1"
      sx={{
        marginTop:'4px',
        marginBottom:'4px',
        lineHeight: 1.6,
      }}
    >
      {text}
    </Typography>
  )
}


const PrivacyPolicy = () => {
  return (
    <div style={{
      backgroundColor: 'dimgray',
      color: 'white',
      minHeight: '100vh',
      padding: '20px',
      maxWidth: '1000px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <H4 text={'Privacy Policy'} />

      <H5 text={'個人情報の利用目的'} />
      <B1 text={'当サイトでは、お問い合わせやコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。'} />
      <B1 text={'取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。'} />


      <H5 text={'広告について'} />

      <H6 text={'Google Adsense'} />
      <B1 text={'当サイトでは、第三者配信の広告サービス「Google AdSense（グーグルアドセンス）」を利用しています。'} />
      <B1 text={'広告配信事業者は、ユーザの興味に応じた商品やサービスの広告を表示するため、Cookie（クッキー）を使用することがあります。'} />

      <B1 text={'クッキーを使用することでユーザのコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。'} />
      <Typography variant="body1">
        Cookieを無効にする方法や「Google AdSense」に関する詳細は、ポリシーと規約（
        <Link href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'aqua' }}>
          https://policies.google.com/technologies/ads
        </Link>
        ）をご確認ください。
      </Typography>

      <H6 text={'Amazon アソシエイト・プログラム'} />
      <B1 text={'当サイトは、Amazon.co.jpを宣伝しリンクすることによって紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。'} />
      <B1 text={'このプログラムにより、第三者がコンテンツおよび宣伝を提供し、サイトの訪問者から直接情報を収集し、訪問者のブラウザにクッキーを設定したりこれを認識したりする場合があります。'} />

      <H5 text={'アクセス解析について'} />
      <B1 text={'当サイトでは、Google によるアクセス解析ツール「Google アナリティクス」を利用しています。'} />
      <B1 text={'Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。'} />
      <B1 text={'このトラフィックデータは匿名で収集されており、個人を特定するものではありません。'} />
      <B1 text={'Cookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。'} />
      <Typography variant="body1">
        この規約に関して、詳細につきましては Google アナリティクス利用規約（
        <Link href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" style={{ color: 'aqua' }}>
          https://marketingplatform.google.com/about/analytics/terms/jp/
        </Link>
        ）をご確認ください。
      </Typography>

      <H5 text={'免責事項'} />
      <B1 text={'当サイトからのリンクやバナーなどによって移動したサイトで提供される情報、サービス等について一切の責任を負いません。'} />
      <B1 text={'当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を提供するよう努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。'} />
      <B1 text={'当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。'} />

      <H5 text={'著作権について'} />
      <B1 text={'当サイトで掲載している画像の著作権や肖像権は各権利所有者に帰属致します。権利を侵害する目的ではございません。'} />
      <B1 text={'著作権や肖像権に問題がございましたら、お問い合わせよりご連絡を下さい。迅速に対応いたします。'} />

      <H5 text={'リンクについて'} />
      <B1 text={'当サイトはリンクフリーです。リンクを行う場合の許可や連絡は不要です。'} />
      <B1 text={'ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。'} />


    </div>
  );
};

export default PrivacyPolicy;
