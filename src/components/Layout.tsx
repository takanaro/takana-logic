import React, { Props } from 'react'

const Layout: React.FC<Props> = ({ location, children }) => {
  const Header = () => {
    return (
      <table>
        <caption>寿司ネタ人気ランキング</caption>
        <thead>
          <tr><th>順位</th><th>名前</th><th>人気度</th><th>備考</th></tr>
        </thead>
        <tbody>
          <tr><th>１位</th><td>トロ</td><td>☆☆☆☆☆</td><td>やはり何といってもトロ！</td></tr>
          <tr><th>２位</th><td>サーモン</td><td>☆☆☆☆</td><td>ほど良い脂の乗りで女性に人気。</td></tr>
          <tr><th>３位</th><td>うに</td><td>☆☆☆</td><td>軍艦もので唯一ランクイン。</td></tr>
          <tr><th>４位</th><td>えび</td><td>☆☆☆</td><td>プリプリした歯ごたえが魅力。</td></tr>
          <tr><th>５位</th><td>イカ</td><td>☆☆</td><td>やはり外せない甘みのあるイカ。</td></tr>
        </tbody>
        <tfoot>
          <tr><td></td><td>※投票対象の寿司ネタは管理者が選定</td><td>※投票ポイントを集計して星（☆）に換算</td><td>※投票者のコメントから抜粋</td></tr>
        </tfoot>
      </table>
    )
  }

  return (
    <div>
      たかなろじっく
      {Header}
      {children}
    </div>
  )
}

export default Layout;
