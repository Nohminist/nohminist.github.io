import React, { useState, useEffect } from 'react';
import { Box, Button, ButtonBase, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme, useMediaQuery } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PolicyIcon from '@mui/icons-material/Policy';
import ScienceIcon from '@mui/icons-material/Science';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Link } from 'react-router-dom';
import { darken, lighten } from '@mui/system';


import '../App.css';
import { Img } from "./Img";



const TopPage = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Grid container>
        <Grid item xs={12} style={{ position: 'relative', margin: '10px' }}>
          <Button
            component="a"
            href="/resleri"
            style={{
              width: '100%',
              paddingTop: '56.25%', // 16:9 のアスペクト比
              display: 'block',
              textAlign: 'initial',
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              <Img name={'resleri'} width={'100%'} height={'100%'} />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '20px', // 画面サイズに応じたフォントサイズ
                  fontWeight: 'bold',
                  padding: '10px 0', // テキストの周りのスペース
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <ScienceIcon style={{ marginRight: '8px', fontSize: isMobile ? '20px' : '24px' }} />
                  レスレリ便利ツール
                </div>
                <div style={{ fontSize: '16px', lineHeight: 1.2 }}>
                  キャラ、メモリア、アイテム、特性の詳細や、調合組合せを検索できます。
                </div>
              </div>
            </div>
          </Button>
        </Grid>
        {/* <Grid item xs={12}
          style={{
            position: 'relative',
            margin: '10px'

          }}>
          <Button
            component="a"
            href="/resleri"
            // variant="contained"

            style={{
              width: '100%',
              paddingTop: '56.25%', // 16:9 のアスペクト比
              display: 'block',
              textAlign: 'initial',
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              <Img name={'resleri'} width={'100%'} height={'100%'} />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  display: 'flex',       // Flexboxを使用
                  alignItems: 'center',  // アイテムを縦方向で中央揃え
                  justifyContent: 'center' // 水平方向にも中央揃え
                }}
              >
                <ScienceIcon style={{ marginRight: '8px' }} />
                レスレリ便利ツール
              </div>
            </div>
          </Button>
        </Grid> */}

        <Grid item xs={12} sm={6} md={4} sx={{ margin: '10px' }}>
          <div style={{ backgroundColor: 'gray', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '15px' }}>About</Typography>
            <Img name={'profile'} square={100} />
            <div style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
              のうみん(Nohmin)
              <IconButton
                component="a"
                href="https://twitter.com/nohminism"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: 1, verticalAlign: 'middle', color: '#1DA1F2' }}
              >
                <TwitterIcon />
              </IconButton>
            </div>
            <Typography variant="body1" style={{ marginTop: '10px', textAlign: 'center' }}>
              Reactを勉強しながら役立つものを作るのが目標です。ゲーム攻略の効率化のために作っていますが、ゲームするよりツール作るほうが楽しかったり。
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ margin: '10px' }}>
          <Box
            component="footer"
            sx={{
              backgroundColor: 'gray',
              padding: '10px',
            }}
          >
            <Button
              component="a"
              href="mailto:nohminism@gmail.com"
              startIcon={<EmailIcon />}
              fullWidth
              variant="contained"
              sx={{
                bgcolor: darken('#7fbfff', 0.5),
                '&:hover': {
                  bgcolor: darken('#7fbfff', 0.4), // ホバー時の色
                }
              }}
            >
              お問い合わせ
            </Button>
            <Button
              component={Link}
              to="/privacy-policy"
              startIcon={<PolicyIcon />}
              fullWidth
              variant="contained"
              sx={{
                bgcolor: darken('#7f7fff', 0.5),
                '&:hover': {
                  bgcolor: darken('#7f7fff', 0.4), // ホバー時の色
                },
                marginTop: '10px'
              }}
            >
              プライバシーポリシー
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopPage;
