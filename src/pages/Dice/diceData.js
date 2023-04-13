const diceData = [
    ['핵주사위', '지뢰주사위', '모래주사위', '조커주사위', '검주사위', '지옥주사위', '방패주사위', '눈보라주사위',
        '성장주사위', '소환주사위', '태양주사위', '암살주사위', '원자주사위', '총주사위', '태풍주사위', '양분주사위',
        '전이주사위', '시간주사위', '콤보주사위', '달주사위', '흐름주사위', '별주사위', '해킹주사위', '침묵주사위',
        '로얄주사위', '태극주사위', '조준주사위', '비눗방울주사위', '수호자주사위', '과열주사위', '지진주사위', '충전주사위',
        '시간역행주사위', '압축주사위', '번개구름주사위', '점화주사위', '중력조작주사위', '폭풍주사위'
    ],

    [
        '핵 주사위를 합치면 가장 앞쪽 타겟에게 [핵]을 날려 몬스터를 즉사시키고, 50% SP를 획득한다. 보스는 한 번에 처치되지 않는 대신 최대체력에 비례한 핵 데미지를 입힌다.',
        `파워업 버튼으로 [설치], [이동] 모드가 변환된다.
    [설치]모드에서 주사위가 [지뢰공장]을 소환한다.
    [지뢰공장]은 일정 시간마다 [지뢰]를 설치한다.
    설치된 [지뢰]는 20초 동안 유지되며 몬스터에 닿으면 현재체력 비례 데미지를(최소 800)입힌다.
    [이동]모드에서는 [지뢰공장]이 이동하며 몬스터에게 닿으면 폭발하여 잃은 체력 비례 데미지(최소 800)를 입히고 [지뢰공장], [지뢰]가 추가로 생성되지 않는다.`,
        `감속 효과가 있는 [모래늪]을 일정시간마다 경로에 설치한다. 다른 감속능력이나 [모래늪]끼리 겹치면 효과가 중첩되며 최대 80%까지 감속된다. 주사위 눈금수가 올라갈수록 [모래늪]의 설치 간격이 빨라진다.`,
        `같은 눈금수의 다른 종류 주사위와 합치면 해당 주사위와 동일한 종류로 변한다.`,
        `몬스터 공격 시 일정 확률로 [빛의 검]을 소환하여 타겟의 현재 체력 절반에 해당하는 데미지를 입힌다. '빛의 검 주사위'가 소환 될 때 15% 확률로 '천상의 검 주사위'가 대신 소환된다.`,
        `'지옥 주사위'의 십자 범위 4칸 주사위에게 [즉사] 버프를 주며 효과는 눈금수에 비례하여 증가한다. 버프를 받은 주사위는 일정 확률로 몬스터를 [즉사] 시키고 50%의 SP를 획득한다. 보스에게 적용되지 않는다.
    [즉사]가 발동될 경우 상대방에게 [망령] 몬스터를 추가로 보낸다. [망령]은 처치해도 SP를 주지 않지만 [즉사]시킬 경우에는 30%의 SP를 획득한다.`,
        `일정 시간마다 몬스터 경로에 [방패]를 설치하여 몬스터의 이동을 봉쇄한다.`,
        `일정 시간마다 전체 필드에 [눈보라]를 일으켜 몬스터의 이동속도를 감소시킨다. [눈보라]의 효과는 눈금수에 비례하며 최대 3번 중첩된다. 이동속도를 최대 50%까지 감속시킨다.`,
        `'성장 주사위'가 일정 시간마다 [성장]하여 눈금 수가 1개 상승하며 무작위 종류로 변한다.`,
        `'소환 주사위'를 합칠 때 무작위 주사위를 1개 소환한다. 합치는 '소환 주사위'의 눈금수에 따라 2성 이상의 주사위가 소환될 수 있다.`,
        `같은 몬스터를 공격하면 점점 데미지가 증가한다. '태양 주사위'가 3,5,7,9개 소환된 경우에는 [활성화] 상태로 변하며, 공격속도가 증가하고 스플래시 데미지를 입힌다.`,
        `	
    '암살 주사위'를 합치면 상대방 무작위 주사위 하나를 [암살]하여 눈금수를 1개 감소시킨다. 협동전에서는 눈금수를 1개 증가시킨다.
    `,
        `눈금수 만큼의 원자가 주사위 주변을 회전한다. 회전중인 원자가 몬스터에 닿으면 현재 체력에 비례한 데미지를 입힌다.`,
        `'총 주사위'가 소환되면 필드에 저격 포인트가 생성되고, 저격으로 일정 수의 적을 처치하면 위치가 변경된다. 저격 포인트 위의 총 주사위는 기본 공격 대신 강한적을 저격하여 공격력의 제곱의 피해를 입힌다. [저격]으로 몹을 처치하면 헤드샷이 적용되어 추가로 [저격]하며, 모든 총 주사위의 공격력이 증가한다. 추가 저격 횟수는 눈금수에 비례한다.`,
        `기본 상태에서 6초가 지나면 [강풍] 1단계로 변신하여 공격 속도가 증가한다.
    곧이어 [강풍] 2단계로 변신하여 크리티컬 확률이 100%가 된다. 변신이 끝나면 다시 기본 상태로 돌아온다.
    `,
        `같은 눈금의 모든 주사위와 합칠 수 있으며, 합치면 주사위 종류가 변하지 않고 눈금 개수만 1개 증가시킨다.
    `,
        `'전이 주사위'를 합치면 상대 경로에 특수 몬스터를 소환하며 눈금수에 비례하여 체력이 상승한다. 주사위 소환 시 15% 확률로 '보스 전이 주사위'가 대신 소환되며, 합치면 특수 몬스터와 동일한 체력의 랜덤 보스를 소환한다. 협동 모드에서는 몬스터 대신 SP 원석이 소환된다.`,
        `'시간 주사위'가 자신의 눈금수 이하의 상대 주사위들의 공격속도를 감소시킨다. 협동전에서는 공격속도를 상승시킨다.`,
        `주사위를 합치면 [콤보] 수치가 증가한다. [콤보] 수치가 증가할수록 주사위의 기본 공격력이 상승한다.`,
        `'달 주사위'의 십자 범위 4칸에 [공격속도 증가] 버프를 주며 버프 효과는 눈금수에 비례한다. '달 주사위'가 3,5,7개 소환된 경우에는 [활성화] 상태로 변하여 [치명타 확률 증가] 5%, [공격력 증가] 10%, [공격속도 증가] 3% 버프를 추가로 준다.`,
        `'흐름 주사위'가 소환되면 상대방 경로의 몬스터 이동 속도가 상승한다. 효과는 눈금수에 비례하며, 협동 모드에서는 이동속도를 감소시킨다.`,
        `'별 주사위'가 소환되면 필드에 [별자리]가 표시된다. [별자리] 위에 '별 주사위'가 위치하면 20초마다 (눈금 수*2)개만큼 [별똥별]이 몬스터 위치로 떨어진다. 모든 [별자리] 위에 '별 주사위'가 위치하면 (눈금 수*2)만큼의 [별똥별]이 떨어지며 현재체력 비례 데미지를 입힌다. 이후 [별자리] 위치가 변경된다.`,
        `'iX10 주사위'를 합치면 상대방 무작위 주사위 하나를 [해킹]한다. [해킹]된 주사위는 공격 시 몬스터 체력을 회복시킨다. 협동모드에서는 추가 데미지를 입힌다.`,
        `'침묵 주사위를 합칠 때, 눈금 수만큼의 상대 주사위를 [침묵] 시킨다. [침묵]에 걸린 주사위는 일정 시간동안 작동을 멈춘다. 협동 모드에서는 주사위 대신 몬스터를 [침묵] 시켜 이동 불가상태로 만든다.`,
        `주사위를 합칠 때 눈금수x2개 만큼 상대 주사위를 무작위 종류로 변경한다.`,
        `필드 위 한 줄이 '태극 주사위'로 모두 채워지면 해당 주사위들에 [태극] 효과가 발동되어 강해진다. 가로, 세로의 [태극] 효과가 모두 적용되면 [극의 조화] 효과가 발동되면서 공격력이 (눈금수 * [태극] 발동 개수)배 만큼 추가로 강해진다.`,
        `'조준경 주사위'의 십자 범위 4칸에 있는 주사위에 [추가 타겟] 버프를 준다.
    [추가 타겟] 버프를 받은 주사위는 '조준경 주사위' 눈금 수만큼 추가 타겟을 공격하며 (눈금 수*10%) 확률로 크리티컬이 적용된다.
    `,
        `'비눗방울 주사위'를 합칠 때, 눈금수만큼의 내 주사위에 [비눗방울]을 덮어씌운다. [비눗방울]은 해당 주사위의 크리티컬 확률을 올려주고, 스킬을 방어해준다.
    [비눗방울]이 적용된 주사위를 두 개 합치면 합쳐진 주사위 주변 4개 주사위에 비눗방울이 퍼진다. 협동전에서는 아군 주사위에도 적용된다.`,
        `내 필드에 소환된 주사위가 스킬에 맞으면 모든 '수호자 주사위'가 1단계씩 [강화]된다. 또한, '수호자 주사위' 주변 8칸에서 다른 주사위를 합칠 경우 2단계가 [강화]된다. [강화]가 1단계 오를 때마다 공격력이 올라가며 최대 (눈금수*2)단계 만큼 올라간다.
    '수호자 주사위'가 직접 공격을 받거나 합쳐지면 [강화]단계가 초기화된다.`,
        `파워 업을 하면 주사위가 1단계 씩 [과열]된다. [과열] 단계가 올라갈 때마다 공격력과 크리티컬 데미지 상승률이 곱해진다. 각 단계별 [과열]은 6초간 지속되며, 시간이 지나면 [과열]이 1단계씩 하락한다. [과열]시 SP소모는 단계별로 늘어나며 1단계가 되면 잠시 쿨타임이 생긴다.`,
        `기본공격 대신 무작위 위치에 [지진]을 발생시켜 몬스터를 느리게 만들며 지속피해를 입힌다. [지진]이 중첩되거나, 주사위 눈금 수가 올라가면 데미지가 상승한다. 지진 주사위를 합치면 전체 필드에 [대지진]을 발생시켜 몬스터 이동속도를 추가로 감속시키고 잃은체력 비례 데미지를 지속적으로 입힌다.`,
        `파워업 버튼으로 [충전], [방출] 모드가 변환된다. [충전]모드에서는 몬스터의 파워를 흡수하여 레벨이 오르며, 보스나 빅 몬스터는 더 높은 효율로 흡수한다. [충전] 시 SP가 소모되며 SP가 부족하면 충전 속도가 떨어진다. 주사위 눈금이 높을수록 충전 속도가 증가한다. [방출] 모드에서는 레벨에 비례한 데미지로 몬스터를 공격한다.`,
        `주사위를 합치는 순간 내 보드판의 주사위상태를 저장하며 일정시간 후에 저장된 상태로 시간을 [역행]시킨다.
    눈금수에 따라 [역행] 시간이 늘어나며, [역행] 직후에는 모든 주사위들이 잠시동안 침묵상태에 빠진다.
    쿨타임이 지나면 [역행] 가능횟수가 쌓이며, 최대 2회까지 저장된다.
    시간역행 주사위가 소환되어 있으면 일정시간마다 남은 쿨타임이 단축된다.`,
        `일정시간마다 기본 공격 대신 에너지 구를 발사한다. 에너지 구는 4면에 인접해있는 주사위가 입힌 기본 공격 데미지를 압축시켜 데미지를 상승시킨다.
    눈금수에 비례하여 기본 공격력이 증가하며 압축 효율도 최대 100% 추가 상승한다.`,
        `주사위 근처의 몬스터들이 기본 공격을 받으면, 번개 에너지를 소모하여 대상에 번개를 내리쳐 눈금수에 비례한 피해를 입힌다. 번개 에너지는 시간이 지나면 점차 회복된다. 또한, 주기적으로 [폭풍우]를 일으키는데 이때 범위 밖에서도 번개가 내리칠 수 있으며 범위 내에서는 번개 데미지가 대폭 상승한다.`,
        `점화 주사위를 합치면 상대 보유SP의 일부를 점화시켜 태우고, 점화된 SP중 일정량을 본인이 회수한다. 또한, '눈금수×3' 만큼 상대 몬스터(일반, 스피드, 빅)에게 7초간 불씨를 남긴다. 불씨를 가진 몬스터가 처치되면 획득하는 SP의 일정 비율을 가져온다.`,
        `중력 조작 주사위를 합치면, 본인의 눈금 이하인 상대 무작위 주사위에게 [중력] 디버프를 남긴다. 디버프는 일정 시간 후에 발동하여, 합성 가능한 주사위와 강제로 합성된다. [중력] 디버프는 합성 가능한 주사위에 우선으로 걸린다.`,
        `폭풍 주사위를 직접 누를 시 폭풍을 소환시키며, 가장 선두의 몹을 지점으로 역행하면서 적들을 차례차례 밀어버리는 주사위이다. 특이하게도 소환시키려면 주사위를 뽑는 sp를 요구한다. 때문에 폭풍을 소환하면 주사위를 뽑은 것마냥 뽑는 sp도 같이 늘어난다.`
    ],
    ['https://i.namu.wiki/i/WgHq4K1ZExJ2KnM297iQz26XoiCzwkpZUSy0pJx-kY15fw5Jep2q131-aulfT8ToL5mh6JegRAxDjG5OEjmv8g.webp',
        'https://i.namu.wiki/i/1-bJLG5SU2cJFWsQ2hnpFbSeNiHRsACw7DhTGLTE-2MWdhnppJrLgBpQKpQ3N5DwDz4iibzGlR7MAKE0wbvglg.webp',
        'https://i.namu.wiki/i/3OcUlYi6t-7lIngl6nc3sa3Y0NxHkNZ7NOh-0Fn8v8_XE9rAruPPDbDZBRtVrDFt0NDlTdtuBybgphoD8l8dkw.webp',
        'https://i.namu.wiki/i/fzvIZ4DQ_GgzkFfIrGQ0OdWQ9FZi1ghxghvUnJW3u-lCp1ha4qTJEqqVMlveVGloiffM5Hr2i4EHkXuuWPH_hQ.webp',
        'https://i.namu.wiki/i/YCwgZ39eGqgxlz82sxv7iI7wfgwzzv4YtB7QeNiRoqCd0LXEViB0zQGOPK2Is-b7ZGG6xQD7CfIXEF14ZtdkEg.webp',
        'https://i.namu.wiki/i/ScBAKWQOt_baDvepNdjZ1CppVSG0RInUeZRUsX1WOfNfLD_B7aSeyul8SeuMkBBQ6bz3cGRug3rucHQV-sB7aQ.webp',
        'https://i.namu.wiki/i/V-CDNeeD225R8mw7LHOBPo7h7JxGiple5Ame_KMeZ5DnNnnxvZzlneeaw861Mt0EwZX9mCttjaytuOIP1panTQ.webp',
        'https://i.namu.wiki/i/upnWEMYgnTcudL-acTJ0KHaEqzjyam-0drGWBQBIEYyJ57Ftd8qKBbYVIb-WZexdk31O9BE1OZ9NR9KagRegJA.webp',
        'https://i.namu.wiki/i/uOfUETJZj-oskByWpgZzxMjaW15V1LRLL5wl4ZTqANcLqGPu0ZheGFK8g3iLqU_HKHaqi3Q_9p7dhoAxtpJH5w.webp',
        'https://i.namu.wiki/i/Qd0jffzVefwZxWQiDsYRgwiVTDgTdy0M_JmnG3u8Bc7seJbPi-86jdhTZBc7wrUZz_nhKBMng0LPfvQhw59fXg.webp',
        'https://i.namu.wiki/i/Ssv2blQZwc3kpaos89eaquOsxHJZl3c565vNOeoKi686oEQ3a6KwYHnXRJa8zwwGW3ZsGC0eHDsxI0L6lMqA4g.webp',
        'https://i.namu.wiki/i/TZ0-K1MdzxpopzVIMtxCTquzfVye4yHjKv-nyp1fMnDAfl3sLz0YFwWc3h2EqcXFegXbJI11aSPdaSt93Aa5dg.webp',
        'https://i.namu.wiki/i/4lzdCoiWlq9CQGfuj3U_20bRcWko8EhG0p7elkMCUW0hz02ZhtgA9GhdMiQq4Zcp4SZB-J4npYPCIDDUgNmvUA.webp',
        'https://i.namu.wiki/i/J-fQMX8g9d39aEPYaLH0y0SwwNU2iY8j_jUE8ySISukVAS2nG7ixm4W7bthhosyGn7smrSw7GckOu24sK4TnAA.webp',
        'https://i.namu.wiki/i/cmTwSky1cKIxNahczG9k43U83B9uxQ8c3YkggG13Xz5E-pWDkiC2TFQrpAz4-zI5ZlgaqSPDQlV0BDORP0SA-Q.webp',
        'https://i.namu.wiki/i/IluJCj3naGnVhTkFBuTHNtVuDsbTNIh9Ksm0w0rp2Ap15fSOpI4MC2RRscJy36LN1J7kYa_7LgZbXKU2r4c0jQ.webp',
        'https://i.namu.wiki/i/Y5Kl3Q1LDzRWAN09bt_ko8PATy-azfkVZnzz0D-ShbppLhzJMvqrylrBvJ79k2AGmjoqoz3S10cxMzUO7v82MQ.webp',
        'https://i.namu.wiki/i/J1YXUpdxycpsufNA0wBZy3fP8mlkfzNxJeE8K87EXfKhobtZDyay-rbe7v1OAR-I9SJq0LVDpYe3QLVm_XkZTQ.webp',
        'https://i.namu.wiki/i/iKdYEFaxTA5RjayOFiKlZw_d_Y0oNphVahOo_ahv2eYS21xRahWiDv2AKGR17VzPx6UZ_5413RqR3iVTCc4Dog.webp',
        'https://i.namu.wiki/i/d4tOHO9mN2SV7_Rha3JBsjyLCi8LLcPWxSsNQszUYOeriG_OkFZK98hJ8qx-CMu37Ll4jaDsgpokjexmfQ2Htw.webp',
        'https://i.namu.wiki/i/IrI_MOTQNLF71lXfapt0OgZO_55_l86QRs-FlLOtaK9wKu6C0dovsAEZ3FvRjVaddnIT1GDERkdte3bvPBe9Xw.webp',
        'https://i.namu.wiki/i/MD1Zq6t--HkcbfGMDn3lET9I6TEAu80RGOVo5FZD7fCAlW5LbsIufgWzSnKPNpDhK94OQYmkbvvcQCxt-OY-RA.webp',
        'https://i.namu.wiki/i/tZ57UGgMvak9aOEJybYd5XrM8Cxd7axLm9BiCvwEY8V2pwhj9X_zKAZnJylmeSfJRX_5uz4cj1jdxulyy4uGGg.webp',
        'https://i.namu.wiki/i/2dK2Y3SegbV9IxtXiCAqOUZV1DDmz9GZJZTt4tqXlxE00w6saG1omGuPOsidcjSfUnbjDJmr6geQ-vFdeXRYWQ.webp',
        'https://i.namu.wiki/i/aX1JX3bF3AVr9U459m0uIJUP5kD0pUjrpuuYCor54CiO24Gq6XtKUG9wEZo44uvUw5_SZ3oNtO1DO8oKd_yxww.webp',
        'https://i.namu.wiki/i/iqnTWLmbkeB_qJZ3RHEDKm8s40Hc6I8kIFcTPp15CEQ2RURWZtf6--dX4c-dTH-PHELgKPRWI45xVyGOtts5NQ.webp',
        'https://i.namu.wiki/i/2FuHZTPSfTykYxWxnvks64ZJvBlfEve2gwY125Ifwi_Q2oR026fPM-gis7PKXp2hRQSigC2k4qpbC_Mf4TjVMw.webp',
        'https://i.namu.wiki/i/8Y2qfge8amIaLKezSOAYqSnVTSsaPAf4vajeSubgA-JNjFpCRuQqXe5wFnSbJehry5QHwLQiLr-BwtaQGjloBw.webp',
        'https://i.namu.wiki/i/OWHX5ENzyKFmWoHbvgnifzpGMfdIzcnjjdHOPZEA4XKivCl9wNVaBHdpSOwtdh77D7Sly2YgyqqhN2uVmuQMbg.webp',
        'https://i.namu.wiki/i/tPlcMhxs73QngZw_c0rQoUzorBIdq9-SE0fthwvosBwGtTk4jFPmIuAp_TQzzq-Ic-UjdkIJVYFwFgTFF3gUig.webp',
        'https://i.namu.wiki/i/4bHJl8uVZ4kx1MBYZbjgeT2X-3irFdG1jm-fSJ20KE2YNwTdmM8G5i5jyi5EPMHnR_B8whyTuKiE_cmXpOHgQg.webp',
        'https://i.namu.wiki/i/EOAV6Kmdu4pj2fRgtzNDhBwad35N7dwXpnYm-EXl-4rR_ZAI0SlcGH8orjPIjei5MRiTxugPysgsSQRiLtIWDw.webp',
        'https://i.namu.wiki/i/6dIW_RQ6MvHHkYxV806K19PrDxrgXP0Cd3jMDzCipvCti_9bzZJMAQlnKcHcT9TxgbsB2BdBrMwpeNMpPvZbkA.webp',
        'https://i.namu.wiki/i/C0Vfl2Pg1-AEUq1pfwF4NMByc0vaRyqRE4Lemxad_n9HqvH5_UPTgPls6BHKRcd1La3aznBPTT587z_8sJJjfA.webp',
        'https://i.namu.wiki/i/PI-IFN_0Q41LKcO3bDipg73vjktGbAo-pqQ6LX5ZcODm0O4essgTjZ300BpSiNa4WukqJcIx80ioWv8sA1v5oA.webp',
        'https://i.namu.wiki/i/A40qwZ5yhPfHkZySTeGD7LTuYtUi02hmq_YO1HeNno2I_z05A2nppFwa7bUnMwk0ocV-w1on9iqIGlkXflkm6w.webp',
        'https://i.namu.wiki/i/vsCVwy9jXPt3BRDItZ5nXglGlacv1VWM6qwpsW5eN9JbpjAIhI6W0Y46-d4XKp40hftPTLDYDcNSRznXXO46bg.webp',
        'https://i.namu.wiki/i/0KFc-U-oNR7Qr9VSTY60kqfF5Z-4kbirYZ40tKPtm4GgnOIaGboK0dSyJFbZ_Hv6keJRs9qux96jJm-wuUzPLw.webp'
    ]
]
export default diceData;