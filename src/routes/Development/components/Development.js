import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import DeveloperModeBoardIcon from 'material-ui-icons/DeveloperMode'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { deepOrange, green } from 'material-ui/styles/colors'

const styleSheet = createStyleSheet('Development', theme => ({
  card: {
    marginBottom: 10,
  },
  allAvatar: {
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.getContrastText(theme.palette.primary[500]),
  },
  frontAvatar: {
    backgroundColor: deepOrange[500],
    color: '#fff',
  },
  severAvatar: {
    backgroundColor: green[500],
    color: '#fff',
  },


}));


function Development(props) {
  const classes = props.classes

  return (
    <div>
      {/*<Typography type="display1" gutterBottom>
        更新済
      </Typography>*/}
      <Typography type="display1" gutterBottom>
        更新予定
      </Typography>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.allAvatar}>A</Avatar>}
          title="ドメインについて"
          subheader="2017/06/22"
        />
        <CardContent>
          <Typography>linkがhttp://thumbnail... → //thumbnail... とすればhttps化出来るっぽい。そしたらドメインを買っても良いかも。</Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.allAvatar}>A</Avatar>}
          title="serverless frameworkへの移管"
          subheader="2017/06/22"
        />
        <CardContent>
          <Typography>サーバーサイドの大幅改修が必要と思われるので、目処が立ち次第やる</Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.frontAvatar}>F</Avatar>}
          title="詳細ページを表示したい"
          subheader="2017/06/22"
        />
        <CardContent>
          <Typography>Dialogで表示して、右下のアイコンで戻るとかしたい。内容がRSSだと全く足らないことが判明。サーバーサイドが出来てから対応する。</Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.frontAvatar}>F</Avatar>}
          title="linkクリックの状態を保存したい(半透明にする)"
          subheader="2017/06/22"
        />
        <CardContent>
          <Typography>localstrageを使って、storeを保存するやり方をやってみる</Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.frontAvatar}>F</Avatar>}
          title="swipeが遅い"
          subheader="2017/06/22"
        />
        <CardContent>
          <Typography>items数、25個で9.5KB  目標は4KB以下なので、画像urlを削り、表示数を減らせば(20個?もっとか?)いけるかも?</Typography>
          <Typography>⇒表示数を10件に絞った結果、swipeの速度が改善したので、無限loading(react-virtualized)を実施して表示数を増やすようにする</Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.severAvatar}>S</Avatar>}
          title="詳細ページを取得したい"
          subheader="2017/06/22"
        />
        <CardContent>
          <Typography>RSSでは無理なので、結構本格的になりそう。大変そうだったらserverless frameworkではpython or node.jsで書くので、rubyは終わりもありだと思う。</Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.severAvatar}>S</Avatar>}
          title="新着、ランキングも取りたい"
          subheader="2017/06/22"
        />
        <CardContent>
          <Typography>新着は、各サイト取得時にいれるようにする。ランキングは後回し。</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Development.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styleSheet)(Development);
