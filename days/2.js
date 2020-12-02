/*
--- Day 2: Password Philosophy ---
Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

For example, suppose you have the following list:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?
*/

const input = [
    {
        min: 5, max: 11, letter: 't', pw: 'glhbttzvzttkdx',
    },
    {
        min: 2, max: 4, letter: 'f', pw: 'cfkmf',
    },
    {
        min: 9, max: 12, letter: 'm', pw: 'mmmmmmmmmmmmm',
    },
    {
        min: 2, max: 10, letter: 'z', pw: 'vghqbzbcxf',
    },
    {
        min: 10, max: 11, letter: 'b', pw: 'tbtbvbbnbwd',
    },
    {
        min: 1, max: 6, letter: 'd', pw: 'cmhdnw',
    },
    {
        min: 1, max: 5, letter: 'r', pw: 'xrrrdrrr',
    },
    {
        min: 12, max: 13, letter: 'g', pw: 'pggkggggfggggg',
    },
    {
        min: 7, max: 9, letter: 'g', pw: 'gsgwhgggg',
    },
    {
        min: 4, max: 5, letter: 'v', pw: 'tvsgqvvv',
    },
    {
        min: 5, max: 7, letter: 'n', pw: 'nnncngdnznjx',
    },
    {
        min: 1, max: 4, letter: 'v', pw: 'vvvzqvzvvvvv',
    },
    {
        min: 11, max: 12, letter: 'r', pw: 'mmrwxhrzvmrr',
    },
    {
        min: 5, max: 11, letter: 'f', pw: 'wcldfbbkxbfjrtffrr',
    },
    {
        min: 3, max: 4, letter: 'x', pw: 'pcnxgxx',
    },
    {
        min: 11, max: 12, letter: 'g', pw: 'kgggghpfgmwzgg',
    },
    {
        min: 2, max: 3, letter: 'z', pw: 'zzzzmzn',
    },
    {
        min: 11, max: 12, letter: 'n', pw: 'nrncpbpnlpnn',
    },
    {
        min: 2, max: 4, letter: 'q', pw: 'qqgq',
    },
    {
        min: 11, max: 14, letter: 'k', pw: 'kkkkkkkkkkkkkkk',
    },
    {
        min: 4, max: 10, letter: 'w', pw: 'fkswkgwwhpjfcg',
    },
    {
        min: 6, max: 12, letter: 's', pw: 'sssshsssfssw',
    },
    {
        min: 2, max: 14, letter: 'd', pw: 'szcsdskhhqrpldwp',
    },
    {
        min: 1, max: 5, letter: 'j', pw: 'zjpjjqxjjjrjjjj',
    },
    {
        min: 9, max: 13, letter: 'q', pw: 'qqqqqqlqjqwqhqqr',
    },
    {
        min: 1, max: 9, letter: 'f', pw: 'vrffffffxffnfbffff',
    },
    {
        min: 13, max: 14, letter: 's', pw: 'ssssssssssssskm',
    },
    {
        min: 3, max: 6, letter: 'z', pw: 'mwrzcnnf',
    },
    {
        min: 8, max: 9, letter: 'c', pw: 'bccczcccctjv',
    },
    {
        min: 2, max: 4, letter: 'j', pw: 'hxpd',
    },
    {
        min: 8, max: 12, letter: 'w', pw: 'fwvzwgfwdwxww',
    },
    {
        min: 3, max: 12, letter: 'h', pw: 'hhtmhhphrhhbhhhk',
    },
    {
        min: 2, max: 4, letter: 'r', pw: 'hrqr',
    },
    {
        min: 10, max: 11, letter: 'f', pw: 'ffffqfffhflfffffff',
    },
    {
        min: 2, max: 6, letter: 'j', pw: 'ggppjc',
    },
    {
        min: 8, max: 16, letter: 'l', pw: 'cltwcjcsxllxctxs',
    },
    {
        min: 3, max: 4, letter: 't', pw: 'ttwj',
    },
    {
        min: 10, max: 12, letter: 'b', pw: 'bqbcbqlnzbtbrm',
    },
    {
        min: 12, max: 13, letter: 'l', pw: 'llllslllwlllgltdlll',
    },
    {
        min: 4, max: 7, letter: 'x', pw: 'xfvxbqxs',
    },
    {
        min: 5, max: 6, letter: 'v', pw: 'xrvqvv',
    },
    {
        min: 11, max: 17, letter: 'q', pw: 'mdblqqptcvqqfqqqq',
    },
    {
        min: 8, max: 19, letter: 'f', pw: 'ffpdzwvcffmsffffbffl',
    },
    {
        min: 12, max: 14, letter: 'w', pw: 'hwpjcxgcvpwhww',
    },
    {
        min: 2, max: 4, letter: 'd', pw: 'pzdtd',
    },
    {
        min: 9, max: 10, letter: 'p', pw: 'vgtpmmxppp',
    },
    {
        min: 3, max: 4, letter: 'k', pw: 'vkwh',
    },
    {
        min: 14, max: 15, letter: 'd', pw: 'swgpzprkmrkxdddk',
    },
    {
        min: 13, max: 14, letter: 'z', pw: 'gxzzgzzjhlzzzs',
    },
    {
        min: 4, max: 5, letter: 'b', pw: 'bbgbbp',
    },
    {
        min: 2, max: 4, letter: 'p', pw: 'pnqcn',
    },
    {
        min: 16, max: 20, letter: 'd', pw: 'rkqpfvbfvtcgdmhddpdd',
    },
    {
        min: 2, max: 3, letter: 'l', pw: 'llzpllll',
    },
    {
        min: 6, max: 10, letter: 'v', pw: 'hdnxdvxmxv',
    },
    {
        min: 2, max: 4, letter: 'm', pw: 'xcfmcmmmzgw',
    },
    {
        min: 9, max: 12, letter: 'n', pw: 'fmcndbqvnlnncqnxffmz',
    },
    {
        min: 3, max: 12, letter: 't', pw: 'bcttczggbtgt',
    },
    {
        min: 4, max: 6, letter: 'j', pw: 'vwvjlq',
    },
    {
        min: 4, max: 5, letter: 't', pw: 'mttfttvtttttttw',
    },
    {
        min: 3, max: 5, letter: 'v', pw: 'vxjvq',
    },
    {
        min: 5, max: 7, letter: 'z', pw: 'kzvzzrzmwwxtnsrmhp',
    },
    {
        min: 9, max: 11, letter: 'p', pw: 'ppppppppppppppppp',
    },
    {
        min: 5, max: 7, letter: 'n', pw: 'nbzdpqvxxcmn',
    },
    {
        min: 5, max: 6, letter: 'n', pw: 'cnnntn',
    },
    {
        min: 2, max: 7, letter: 'r', pw: 'rrrrrrrrhrrwrrrr',
    },
    {
        min: 6, max: 18, letter: 's', pw: 'stngssgssnsrsflsssk',
    },
    {
        min: 11, max: 14, letter: 'q', pw: 'qqqqqqqqqqqqqnq',
    },
    {
        min: 3, max: 5, letter: 'd', pw: 'dtdvd',
    },
    {
        min: 3, max: 4, letter: 'm', pw: 'mmqn',
    },
    {
        min: 7, max: 10, letter: 'd', pw: 'ddddddddddd',
    },
    {
        min: 7, max: 11, letter: 'k', pw: 'kkkkkkkckkkkk',
    },
    {
        min: 9, max: 16, letter: 'z', pw: 'zzxzgwtjzzzzzhkz',
    },
    {
        min: 6, max: 8, letter: 'l', pw: 'lllllllll',
    },
    {
        min: 13, max: 18, letter: 'z', pw: 'tszsszrlzzqzzkzwxjxd',
    },
    {
        min: 3, max: 11, letter: 'b', pw: 'bbcbbbbnbbppbbb',
    },
    {
        min: 2, max: 8, letter: 'j', pw: 'jjjjjjjjjjjjjpjjjj',
    },
    {
        min: 1, max: 8, letter: 'f', pw: 'fcltvbhffbqf',
    },
    {
        min: 6, max: 19, letter: 'm', pw: 'hhvkzmqtmpvbvrbhwmm',
    },
    {
        min: 7, max: 8, letter: 'z', pw: 'qzzmzzzzqz',
    },
    {
        min: 2, max: 5, letter: 'b', pw: 'fhbwb',
    },
    {
        min: 3, max: 4, letter: 'm', pw: 'mrlqtlkphwnc',
    },
    {
        min: 8, max: 10, letter: 'p', pw: 'cprpgpwkpp',
    },
    {
        min: 2, max: 5, letter: 't', pw: 'tttttt',
    },
    {
        min: 7, max: 10, letter: 'm', pw: 'zlrbpxxwvrjxs',
    },
    {
        min: 10, max: 14, letter: 'q', pw: 'gddtnqqcqlfqshq',
    },
    {
        min: 9, max: 11, letter: 'p', pw: 'kpzpppppnhspp',
    },
    {
        min: 1, max: 5, letter: 'n', pw: 'wfvnv',
    },
    {
        min: 7, max: 8, letter: 'k', pw: 'fbzwwdkdx',
    },
    {
        min: 2, max: 5, letter: 'd', pw: 'gjgxfdcvhrmwwrl',
    },
    {
        min: 1, max: 3, letter: 's', pw: 'sxss',
    },
    {
        min: 8, max: 12, letter: 'n', pw: 'nnnnnnnsnnnnnncvnn',
    },
    {
        min: 11, max: 12, letter: 'c', pw: 'cccccccccccvc',
    },
    {
        min: 3, max: 10, letter: 'v', pw: 'bvvvvgwdvqbv',
    },
    {
        min: 6, max: 15, letter: 'b', pw: 'hfnlwhxxmbgwbbkgfp',
    },
    {
        min: 18, max: 19, letter: 'm', pw: 'mbfbmmjmmmmvmmjcpmc',
    },
    {
        min: 1, max: 13, letter: 'n', pw: 'jxbqfntqxwjncfzmftjv',
    },
    {
        min: 3, max: 5, letter: 'b', pw: 'rqxpblz',
    },
    {
        min: 14, max: 16, letter: 'n', pw: 'nnnbpnnpgnptnsnhnnn',
    },
    {
        min: 8, max: 9, letter: 'g', pw: 'jgzgfgpqq',
    },
    {
        min: 9, max: 10, letter: 'f', pw: 'fffffffffff',
    },
    {
        min: 5, max: 7, letter: 'c', pw: 'crcctccc',
    },
    {
        min: 5, max: 9, letter: 'j', pw: 'nnkwgjtjj',
    },
    {
        min: 5, max: 7, letter: 'f', pw: 'mxffbff',
    },
    {
        min: 2, max: 4, letter: 'g', pw: 'qggng',
    },
    {
        min: 4, max: 8, letter: 'r', pw: 'rxrrzpjrmqlgvkv',
    },
    {
        min: 8, max: 17, letter: 'q', pw: 'wqtdqqqkqqlldqqqfrq',
    },
    {
        min: 10, max: 11, letter: 'h', pw: 'spmxjhhhhhh',
    },
    {
        min: 3, max: 4, letter: 'q', pw: 'qqkq',
    },
    {
        min: 4, max: 6, letter: 'b', pw: 'bbbbkb',
    },
    {
        min: 15, max: 16, letter: 'x', pw: 'xxxxxxfxxxxvxxfxxx',
    },
    {
        min: 3, max: 4, letter: 'k', pw: 'kqxm',
    },
    {
        min: 4, max: 9, letter: 'w', pw: 'cbkrrgkzg',
    },
    {
        min: 14, max: 17, letter: 's', pw: 'sssssssssssssdssms',
    },
    {
        min: 17, max: 18, letter: 'c', pw: 'cccccccccccccccckccc',
    },
    {
        min: 6, max: 8, letter: 'l', pw: 'llllmgllkqsllsq',
    },
    {
        min: 16, max: 19, letter: 'k', pw: 'kkkkkkkkkkkkkkkkkkgk',
    },
    {
        min: 15, max: 17, letter: 'f', pw: 'ffqffffffffffffff',
    },
    {
        min: 16, max: 19, letter: 'p', pw: 'pppppppppppppppgpppp',
    },
    {
        min: 1, max: 2, letter: 's', pw: 'ssnsl',
    },
    {
        min: 5, max: 17, letter: 'v', pw: 'vgwwvvfvvldvsqqwvgt',
    },
    {
        min: 5, max: 7, letter: 'm', pw: 'mtbqmfm',
    },
    {
        min: 3, max: 6, letter: 'b', pw: 'wmzbxbxx',
    },
    {
        min: 9, max: 19, letter: 'h', pw: 'lhmwjzxchvjsxtmbmqh',
    },
    {
        min: 10, max: 11, letter: 'p', pw: 'ppppppppppzpp',
    },
    {
        min: 3, max: 16, letter: 'p', pw: 'ppqppppppppppppppjpp',
    },
    {
        min: 3, max: 4, letter: 'p', pw: 'hpjhhw',
    },
    {
        min: 8, max: 12, letter: 'm', pw: 'wzvmhjnmlbdmwlnvwwh',
    },
    {
        min: 4, max: 7, letter: 'n', pw: 'nnnnnnhnnn',
    },
    {
        min: 11, max: 13, letter: 'h', pw: 'hhchrhthhmhhcmg',
    },
    {
        min: 1, max: 4, letter: 'f', pw: 'fffh',
    },
    {
        min: 6, max: 8, letter: 'q', pw: 'qqqqqqqq',
    },
    {
        min: 4, max: 12, letter: 'd', pw: 'dddddddddddkd',
    },
    {
        min: 2, max: 8, letter: 'g', pw: 'gkgggggrqggg',
    },
    {
        min: 12, max: 18, letter: 'g', pw: 'ggjhbbljhgtfrgwgggg',
    },
    {
        min: 5, max: 15, letter: 'd', pw: 'dddddddddddddddd',
    },
    {
        min: 7, max: 12, letter: 'v', pw: 'kkmcjvvvvhvvpv',
    },
    {
        min: 3, max: 11, letter: 'r', pw: 'nhrcwzxhrsr',
    },
    {
        min: 6, max: 8, letter: 'h', pw: 'dhhhnhzhhdhhh',
    },
    {
        min: 2, max: 3, letter: 'k', pw: 'vfkckkk',
    },
    {
        min: 3, max: 18, letter: 'c', pw: 'nxcrgvbbchzbznxqxb',
    },
    {
        min: 3, max: 6, letter: 'x', pw: 'xxxxxxxx',
    },
    {
        min: 11, max: 15, letter: 'w', pw: 'wwwwwwwwlwlwxwwkh',
    },
    {
        min: 7, max: 12, letter: 't', pw: 'jttttwdtkzttttft',
    },
    {
        min: 6, max: 7, letter: 'l', pw: 'tqslglhkxmcmjksxlc',
    },
    {
        min: 1, max: 4, letter: 's', pw: 'kssz',
    },
    {
        min: 14, max: 16, letter: 'b', pw: 'bbbbbbtbbbbbbcbsbwbb',
    },
    {
        min: 5, max: 8, letter: 'l', pw: 'llllrllhll',
    },
    {
        min: 6, max: 7, letter: 'd', pw: 'bjddgkztz',
    },
    {
        min: 4, max: 5, letter: 'x', pw: 'cnxxtxxz',
    },
    {
        min: 3, max: 4, letter: 'm', pw: 'mmzdgmtmwm',
    },
    {
        min: 2, max: 6, letter: 'z', pw: 'zzzzzhlzz',
    },
    {
        min: 9, max: 14, letter: 'b', pw: 'jhbbkdpfwrvbsqchgl',
    },
    {
        min: 8, max: 14, letter: 'q', pw: 'wqbtbjpfxxwrgnp',
    },
    {
        min: 14, max: 19, letter: 'p', pw: 'pxmfpcpkppppprppcwx',
    },
    {
        min: 5, max: 8, letter: 'w', pw: 'wkcqvdwp',
    },
    {
        min: 7, max: 15, letter: 'x', pw: 'zwpzjkjtdrhlwksxdz',
    },
    {
        min: 1, max: 2, letter: 'g', pw: 'bggg',
    },
    {
        min: 3, max: 5, letter: 'z', pw: 'zzzzzzz',
    },
    {
        min: 7, max: 10, letter: 'v', pw: 'tvvvvvvpvvvvvvvv',
    },
    {
        min: 2, max: 3, letter: 'r', pw: 'rrrrrr',
    },
    {
        min: 4, max: 9, letter: 'z', pw: 'zpzmzzzzpzzp',
    },
    {
        min: 4, max: 6, letter: 's', pw: 'dsnswc',
    },
    {
        min: 1, max: 12, letter: 'f', pw: 'fffzffffffffff',
    },
    {
        min: 1, max: 5, letter: 'c', pw: 'cqccvccczmccc',
    },
    {
        min: 5, max: 19, letter: 'x', pw: 'lgrsxhlwzthdxtwfbvx',
    },
    {
        min: 3, max: 10, letter: 't', pw: 'xvhtznxhvgpx',
    },
    {
        min: 3, max: 11, letter: 'x', pw: 'gvhxpjmwxtxmgqks',
    },
    {
        min: 11, max: 13, letter: 'b', pw: 'rjvtlmntzpbbjprtlbb',
    },
    {
        min: 1, max: 4, letter: 'm', pw: 'mmmm',
    },
    {
        min: 5, max: 10, letter: 'k', pw: 'pkkgkkmnhk',
    },
    {
        min: 2, max: 3, letter: 'v', pw: 'vvmv',
    },
    {
        min: 12, max: 13, letter: 'p', pw: 'mppspppbfpgwp',
    },
    {
        min: 1, max: 3, letter: 'm', pw: 'mmmpmmbm',
    },
    {
        min: 4, max: 9, letter: 'b', pw: 'hzbjdbjxpxqbtlm',
    },
    {
        min: 1, max: 4, letter: 'p', pw: 'ppppppppppppppp',
    },
    {
        min: 4, max: 5, letter: 'g', pw: 'ggfgg',
    },
    {
        min: 8, max: 11, letter: 'j', pw: 'dwjzgmgdcczhwc',
    },
    {
        min: 6, max: 7, letter: 'w', pw: 'wwwwwwwww',
    },
    {
        min: 3, max: 5, letter: 't', pw: 'vtqwt',
    },
    {
        min: 1, max: 5, letter: 'k', pw: 'kkhkkk',
    },
    {
        min: 4, max: 7, letter: 'c', pw: 'ccvtcrcc',
    },
    {
        min: 1, max: 10, letter: 'l', pw: 'vwknprttll',
    },
    {
        min: 9, max: 11, letter: 'x', pw: 'htnnvnrtxdx',
    },
    {
        min: 15, max: 17, letter: 'r', pw: 'rrrrxrrlrrrrrcrrs',
    },
    {
        min: 2, max: 3, letter: 'v', pw: 'vsvvv',
    },
    {
        min: 4, max: 15, letter: 'g', pw: 'mxjglqklwwjnksg',
    },
    {
        min: 1, max: 2, letter: 'c', pw: 'ccdc',
    },
    {
        min: 10, max: 16, letter: 'l', pw: 'ljrrlvtlrqglmgdf',
    },
    {
        min: 3, max: 6, letter: 's', pw: 'ssssblsdsb',
    },
    {
        min: 5, max: 6, letter: 'r', pw: 'mrrrrtrr',
    },
    {
        min: 13, max: 17, letter: 'w', pw: 'wwwwghwwtkwwrwwfx',
    },
    {
        min: 4, max: 5, letter: 'j', pw: 'jjdjjzjjb',
    },
    {
        min: 2, max: 3, letter: 's', pw: 'ssjsss',
    },
    {
        min: 8, max: 14, letter: 'r', pw: 'rrrrrrrrrrrrrrrrrr',
    },
    {
        min: 7, max: 9, letter: 'l', pw: 'lllllllllll',
    },
    {
        min: 15, max: 17, letter: 'j', pw: 'jjxjjjjjsjjjjjjjjjj',
    },
    {
        min: 6, max: 8, letter: 'r', pw: 'hrrrcqrr',
    },
    {
        min: 6, max: 7, letter: 'w', pw: 'wndbtqqmdw',
    },
    {
        min: 4, max: 7, letter: 'k', pw: 'cktskgxmkk',
    },
    {
        min: 3, max: 9, letter: 'z', pw: 'blkmxrzjhcp',
    },
    {
        min: 10, max: 11, letter: 'p', pw: 'ppppppzpfmpt',
    },
    {
        min: 8, max: 9, letter: 's', pw: 'sssssssss',
    },
    {
        min: 1, max: 5, letter: 'l', pw: 'zglfs',
    },
    {
        min: 7, max: 8, letter: 's', pw: 'mstsxsvsm',
    },
    {
        min: 1, max: 4, letter: 'z', pw: 'zzzzrbvzwr',
    },
    {
        min: 16, max: 17, letter: 'g', pw: 'ggggkgggggggggggggg',
    },
    {
        min: 1, max: 2, letter: 'j', pw: 'jjjjjwjjzj',
    },
    {
        min: 4, max: 18, letter: 'm', pw: 'zmmbvvsrcmmcmqmpwlm',
    },
    {
        min: 11, max: 15, letter: 'f', pw: 'ffffffffffvfffq',
    },
    {
        min: 5, max: 6, letter: 'c', pw: 'csvcccccc',
    },
    {
        min: 1, max: 12, letter: 'z', pw: 'zzzzzgzzzzzbqz',
    },
    {
        min: 17, max: 18, letter: 's', pw: 'sssssssssssssssjns',
    },
    {
        min: 6, max: 10, letter: 'm', pw: 'jmfztgfmml',
    },
    {
        min: 5, max: 7, letter: 'x', pw: 'bnxxxrx',
    },
    {
        min: 13, max: 16, letter: 'p', pw: 'ppppppppppppmpphp',
    },
    {
        min: 11, max: 14, letter: 't', pw: 'ttttttltttvttttx',
    },
    {
        min: 13, max: 14, letter: 't', pw: 'qttnscscgxttttt',
    },
    {
        min: 4, max: 5, letter: 'b', pw: 'vzbhz',
    },
    {
        min: 4, max: 7, letter: 'r', pw: 'tdrzrrfqrrrrrrb',
    },
    {
        min: 15, max: 17, letter: 'p', pw: 'pppppppppppppppppp',
    },
    {
        min: 9, max: 17, letter: 'q', pw: 'xgqqnxppgqjqsbqqqdnv',
    },
    {
        min: 3, max: 15, letter: 't', pw: 'hrrnrspnpkwcktg',
    },
    {
        min: 3, max: 6, letter: 'f', pw: 'fffcxf',
    },
    {
        min: 3, max: 8, letter: 'n', pw: 'nznvppnn',
    },
    {
        min: 4, max: 6, letter: 'z', pw: 'lzksskczzjzz',
    },
    {
        min: 6, max: 12, letter: 'n', pw: 'nnnnnsnnnnnwrn',
    },
    {
        min: 11, max: 12, letter: 'q', pw: 'qqnqqqpqqqcqqqqs',
    },
    {
        min: 5, max: 11, letter: 'z', pw: 'zzzzlzzzzzrzz',
    },
    {
        min: 1, max: 5, letter: 'z', pw: 'zzzzz',
    },
    {
        min: 4, max: 5, letter: 'j', pw: 'bsspj',
    },
    {
        min: 18, max: 19, letter: 'd', pw: 'ptdpdjpsdpddhsddkwd',
    },
    {
        min: 13, max: 16, letter: 'k', pw: 'kkkkkkkkkkkkfkkw',
    },
    {
        min: 7, max: 9, letter: 's', pw: 'zsssbssfs',
    },
    {
        min: 15, max: 19, letter: 'b', pw: 'bbbbbbbbbbbbbbbbbbbb',
    },
    {
        min: 1, max: 7, letter: 'g', pw: 'gngrmgb',
    },
    {
        min: 1, max: 7, letter: 'f', pw: 'vgkmsrfgwlwqzvfk',
    },
    {
        min: 7, max: 11, letter: 'p', pw: 'psfkppdwxdt',
    },
    {
        min: 1, max: 12, letter: 'p', pw: 'hppbpppppppbpppppp',
    },
    {
        min: 12, max: 13, letter: 'd', pw: 'xxzpkwgzcxddq',
    },
    {
        min: 6, max: 7, letter: 'k', pw: 'ktkkkqk',
    },
    {
        min: 8, max: 9, letter: 'v', pw: 'vvvvvvvvvfvv',
    },
    {
        min: 9, max: 13, letter: 'g', pw: 'ggggggggggggzggg',
    },
    {
        min: 6, max: 7, letter: 'g', pw: 'gggggggggggggggggg',
    },
    {
        min: 6, max: 10, letter: 'g', pw: 'gqgggcgggf',
    },
    {
        min: 3, max: 9, letter: 'r', pw: 'wdkkqwbrgpvnrmvqc',
    },
    {
        min: 2, max: 4, letter: 'x', pw: 'xxsxjndqbd',
    },
    {
        min: 13, max: 14, letter: 'j', pw: 'jjjjmjjsjjjjjj',
    },
    {
        min: 12, max: 13, letter: 'd', pw: 'dddddddddddddd',
    },
    {
        min: 3, max: 4, letter: 'h', pw: 'rqnbzh',
    },
    {
        min: 2, max: 3, letter: 'f', pw: 'ftxhlhhpvdvnz',
    },
    {
        min: 11, max: 17, letter: 'g', pw: 'hnkmggstgggbgvrggj',
    },
    {
        min: 6, max: 7, letter: 'c', pw: 'cccccvc',
    },
    {
        min: 3, max: 4, letter: 'm', pw: 'mmtm',
    },
    {
        min: 2, max: 7, letter: 'r', pw: 'rhrrrrr',
    },
    {
        min: 6, max: 14, letter: 'l', pw: 'wpzllljvxdsxblz',
    },
    {
        min: 7, max: 8, letter: 'b', pw: 'wxbrbbbb',
    },
    {
        min: 9, max: 12, letter: 'q', pw: 'qfqqqqqqlqqrqvq',
    },
    {
        min: 11, max: 15, letter: 'p', pw: 'ppppppppppppppppppp',
    },
    {
        min: 19, max: 20, letter: 'l', pw: 'vjbsvzclllslkmlslxml',
    },
    {
        min: 4, max: 5, letter: 'v', pw: 'jvnbhkv',
    },
    {
        min: 12, max: 16, letter: 'j', pw: 'jfjjjjjjjkjsjjjvjjj',
    },
    {
        min: 3, max: 4, letter: 'w', pw: 'wwww',
    },
    {
        min: 1, max: 4, letter: 'v', pw: 'kvnv',
    },
    {
        min: 1, max: 5, letter: 'r', pw: 'hrrrdrrrrrrrrrrrr',
    },
    {
        min: 18, max: 19, letter: 's', pw: 'skwfsfqfmhfgkbsmsnj',
    },
    {
        min: 3, max: 4, letter: 'f', pw: 'pfks',
    },
    {
        min: 11, max: 12, letter: 'p', pw: 'ttpbsjfvxcdm',
    },
    {
        min: 4, max: 8, letter: 'd', pw: 'vhdddgndrmddfdg',
    },
    {
        min: 1, max: 3, letter: 'j', pw: 'sbjwgvvhvj',
    },
    {
        min: 13, max: 20, letter: 'l', pw: 'gslclvrnllgljtljmlnn',
    },
    {
        min: 9, max: 11, letter: 'm', pw: 'mmmmmmmjkmdrmmmm',
    },
    {
        min: 8, max: 14, letter: 'r', pw: 'fmzrhrdssfmxkq',
    },
    {
        min: 3, max: 9, letter: 'f', pw: 'rvfmskmdfk',
    },
    {
        min: 3, max: 13, letter: 'c', pw: 'ccjcccccccccbc',
    },
    {
        min: 15, max: 16, letter: 'w', pw: 'wwwwwwwwwwwwwwwww',
    },
    {
        min: 4, max: 5, letter: 'r', pw: 'hrlnjk',
    },
    {
        min: 5, max: 13, letter: 'q', pw: 'qqqqqqqqqqqqqqqq',
    },
    {
        min: 15, max: 16, letter: 'j', pw: 'jjjjjjjjjjjjjjjjj',
    },
    {
        min: 18, max: 19, letter: 'p', pw: 'mhsgkktbhpwvvqmppbmc',
    },
    {
        min: 13, max: 15, letter: 'g', pw: 'vfjtrgrrkbstblz',
    },
    {
        min: 12, max: 15, letter: 'j', pw: 'jjjjkczjjjjjjpjjjvjx',
    },
    {
        min: 3, max: 4, letter: 'b', pw: 'dbbb',
    },
    {
        min: 6, max: 7, letter: 's', pw: 'sbssskssss',
    },
    {
        min: 15, max: 16, letter: 'p', pw: 'jgppppsspppppgxwm',
    },
    {
        min: 2, max: 11, letter: 'f', pw: 'hmhwwqcjdfk',
    },
    {
        min: 4, max: 6, letter: 't', pw: 'tttttqt',
    },
    {
        min: 1, max: 8, letter: 'r', pw: 'vrrrrdqrrrrrrrrrrr',
    },
    {
        min: 2, max: 5, letter: 'v', pw: 'lftqnpm',
    },
    {
        min: 3, max: 4, letter: 'h', pw: 'fbzthx',
    },
    {
        min: 2, max: 8, letter: 'w', pw: 'wwnpwwxwwwcwzwwr',
    },
    {
        min: 1, max: 3, letter: 'r', pw: 'grrrr',
    },
    {
        min: 12, max: 13, letter: 'd', pw: 'pvddxddtsqgdd',
    },
    {
        min: 4, max: 18, letter: 'w', pw: 'vfsrcftqqllwqvqwhrgt',
    },
    {
        min: 3, max: 11, letter: 'w', pw: 'wnwqmfxfgkcxhmgh',
    },
    {
        min: 17, max: 18, letter: 'l', pw: 'lllllllllllllllllb',
    },
    {
        min: 5, max: 6, letter: 'x', pw: 'rvfxxx',
    },
    {
        min: 10, max: 11, letter: 'n', pw: 'nnnnnnnnnnnnn',
    },
    {
        min: 1, max: 9, letter: 's', pw: 'wshhwwsscxps',
    },
    {
        min: 2, max: 12, letter: 'k', pw: 'bkvqsmzmjbckxvhtnkfb',
    },
    {
        min: 7, max: 10, letter: 'l', pw: 'ltlsnlrllm',
    },
    {
        min: 1, max: 5, letter: 'n', pw: 'nvnnn',
    },
    {
        min: 2, max: 4, letter: 'm', pw: 'gmpmz',
    },
    {
        min: 13, max: 19, letter: 'k', pw: 'kkkkwkkxkkkkpkfkkkq',
    },
    {
        min: 6, max: 15, letter: 'l', pw: 'dlhlcllllrllllll',
    },
    {
        min: 14, max: 15, letter: 'q', pw: 'qqqqfqcqqqqqqqsq',
    },
    {
        min: 6, max: 7, letter: 'z', pw: 'qzzdtzzqzz',
    },
    {
        min: 1, max: 4, letter: 'v', pw: 'pvvvkrgkvhmvvv',
    },
    {
        min: 1, max: 3, letter: 'b', pw: 'bfbcjdmb',
    },
    {
        min: 6, max: 9, letter: 'b', pw: 'gqbljxvmmbcbbkqgb',
    },
    {
        min: 10, max: 12, letter: 'v', pw: 'vvvvmvvhdrzv',
    },
    {
        min: 2, max: 3, letter: 't', pw: 'tttt',
    },
    {
        min: 9, max: 13, letter: 'p', pw: 'jlhnpxnppwnpplqp',
    },
    {
        min: 3, max: 5, letter: 'z', pw: 'zdzcz',
    },
    {
        min: 4, max: 19, letter: 'b', pw: 'bbbbbbbbbrgbbdbbbbb',
    },
    {
        min: 9, max: 15, letter: 'x', pw: 'xxxxxxxxlxxxxxbx',
    },
    {
        min: 1, max: 5, letter: 'f', pw: 'sfffmf',
    },
    {
        min: 8, max: 12, letter: 'w', pw: 'lnlwfcwgtzhxlr',
    },
    {
        min: 1, max: 3, letter: 'c', pw: 'cclrc',
    },
    {
        min: 8, max: 12, letter: 'p', pw: 'jhkpfmltvpjpb',
    },
    {
        min: 2, max: 8, letter: 'm', pw: 'jmnmhkrmqvwx',
    },
    {
        min: 7, max: 9, letter: 'p', pw: 'pppppppndppp',
    },
    {
        min: 7, max: 9, letter: 'k', pw: 'kkkmkkkdkks',
    },
    {
        min: 4, max: 5, letter: 'w', pw: 'wwwwww',
    },
    {
        min: 1, max: 3, letter: 'j', pw: 'pjjj',
    },
    {
        min: 3, max: 4, letter: 'z', pw: 'xczz',
    },
    {
        min: 5, max: 6, letter: 'h', pw: 'nhdlvq',
    },
    {
        min: 4, max: 9, letter: 'g', pw: 'gggngrgtgggggg',
    },
    {
        min: 6, max: 9, letter: 'l', pw: 'klllltllrlll',
    },
    {
        min: 1, max: 3, letter: 'k', pw: 'mkkk',
    },
    {
        min: 4, max: 11, letter: 'b', pw: 'hfbbbfccxbc',
    },
    {
        min: 4, max: 10, letter: 'w', pw: 'wmhpzkswdwl',
    },
    {
        min: 1, max: 2, letter: 'h', pw: 'kphh',
    },
    {
        min: 10, max: 17, letter: 'g', pw: 'gggggggggggggggggggg',
    },
    {
        min: 15, max: 19, letter: 'g', pw: 'gggmggggggggggggggg',
    },
    {
        min: 2, max: 3, letter: 'z', pw: 'zqxl',
    },
    {
        min: 8, max: 10, letter: 'p', pw: 'pppphpppppppp',
    },
    {
        min: 2, max: 3, letter: 'q', pw: 'qhsqqqq',
    },
    {
        min: 1, max: 4, letter: 'v', pw: 'vqtvvlnpwvvnv',
    },
    {
        min: 16, max: 17, letter: 'g', pw: 'bgjpggsggggxggjgg',
    },
    {
        min: 8, max: 9, letter: 'p', pw: 'kpskgpklpkprqrtpjkdh',
    },
    {
        min: 8, max: 12, letter: 'f', pw: 'frxfhffpqqfw',
    },
    {
        min: 3, max: 4, letter: 'd', pw: 'dswjddd',
    },
    {
        min: 5, max: 9, letter: 't', pw: 'ttwtttttdttttt',
    },
    {
        min: 3, max: 5, letter: 'q', pw: 'qqqqq',
    },
    {
        min: 2, max: 11, letter: 'g', pw: 'gggggggggggg',
    },
    {
        min: 3, max: 15, letter: 'd', pw: 'tddxdddddddsdvdx',
    },
    {
        min: 2, max: 3, letter: 'd', pw: 'dzmnd',
    },
    {
        min: 4, max: 8, letter: 'j', pw: 'gjjjjjjvkbjcbxp',
    },
    {
        min: 5, max: 18, letter: 'l', pw: 'djxdjmvntxwlnsftglr',
    },
    {
        min: 3, max: 6, letter: 'b', pw: 'bbhbbbbbh',
    },
    {
        min: 17, max: 20, letter: 'k', pw: 'kkzkkkkkrkkkkkkkhkkv',
    },
    {
        min: 7, max: 9, letter: 'f', pw: 'fvffffzfnff',
    },
    {
        min: 4, max: 10, letter: 't', pw: 'tttkttttwwtt',
    },
    {
        min: 3, max: 5, letter: 't', pw: 'vttmpzqxqtqnz',
    },
    {
        min: 8, max: 9, letter: 'q', pw: 'wkpkqsvvqmdq',
    },
    {
        min: 3, max: 6, letter: 'q', pw: 'qhqqqq',
    },
    {
        min: 3, max: 4, letter: 'q', pw: 'qdqqpph',
    },
    {
        min: 2, max: 6, letter: 't', pw: 'vrzktf',
    },
    {
        min: 2, max: 3, letter: 'n', pw: 'nnnn',
    },
    {
        min: 3, max: 4, letter: 't', pw: 'tbtw',
    },
    {
        min: 5, max: 12, letter: 'v', pw: 'zrwpjvpmxgncxknv',
    },
    {
        min: 10, max: 12, letter: 'r', pw: 'rrrrgdrrrzrs',
    },
    {
        min: 3, max: 4, letter: 'k', pw: 'qmmmbbnvvhvdwmfzk',
    },
    {
        min: 5, max: 6, letter: 'j', pw: 'jqzvjjjxj',
    },
    {
        min: 7, max: 13, letter: 'v', pw: 'vvvvvvvvvvvvkvv',
    },
    {
        min: 7, max: 8, letter: 'p', pw: 'kpppphppph',
    },
    {
        min: 6, max: 7, letter: 'l', pw: 'lzsfzlll',
    },
    {
        min: 7, max: 9, letter: 'm', pw: 'mmmmmmgmn',
    },
    {
        min: 3, max: 8, letter: 'm', pw: 'lmbxzdzrsq',
    },
    {
        min: 14, max: 17, letter: 'k', pw: 'ckhdnjzmvhtvbktskrk',
    },
    {
        min: 5, max: 10, letter: 'd', pw: 'ddpdpdjtnbdg',
    },
    {
        min: 6, max: 8, letter: 'v', pw: 'vtfzlwgdffhf',
    },
    {
        min: 7, max: 8, letter: 'n', pw: 'nkvnjsrnn',
    },
    {
        min: 2, max: 5, letter: 'p', pw: 'ppkppp',
    },
    {
        min: 2, max: 3, letter: 'p', pw: 'nppgpbr',
    },
    {
        min: 1, max: 3, letter: 'k', pw: 'dklkkkkkkkk',
    },
    {
        min: 1, max: 2, letter: 'x', pw: 'xxxx',
    },
    {
        min: 2, max: 4, letter: 'd', pw: 'dpdtddd',
    },
    {
        min: 4, max: 5, letter: 'p', pw: 'mlhpphxphv',
    },
    {
        min: 14, max: 15, letter: 'x', pw: 'xxdxdwkxxvbxwcxxx',
    },
    {
        min: 10, max: 11, letter: 'f', pw: 'jdfsmfxffffwfrfffhj',
    },
    {
        min: 3, max: 9, letter: 'l', pw: 'llbgcfzlnz',
    },
    {
        min: 13, max: 14, letter: 'h', pw: 'chhhhwhmqhhjhh',
    },
    {
        min: 3, max: 4, letter: 'g', pw: 'gmgkggg',
    },
    {
        min: 6, max: 7, letter: 'q', pw: 'qprdhdwsjnblqnkgf',
    },
    {
        min: 9, max: 10, letter: 'r', pw: 'rrrrwprhrr',
    },
    {
        min: 2, max: 5, letter: 'g', pw: 'jbjgl',
    },
    {
        min: 7, max: 8, letter: 'x', pw: 'xxxxxxnl',
    },
    {
        min: 7, max: 8, letter: 'q', pw: 'qqqqqqgr',
    },
    {
        min: 3, max: 4, letter: 'v', pw: 'vvvsv',
    },
    {
        min: 3, max: 4, letter: 'w', pw: 'wwhnjwwgw',
    },
    {
        min: 1, max: 8, letter: 'f', pw: 'mdqfrxfwfcf',
    },
    {
        min: 2, max: 4, letter: 'v', pw: 'gvhvwkvhfs',
    },
    {
        min: 15, max: 16, letter: 'd', pw: 'dcddddddddddddqnddd',
    },
    {
        min: 13, max: 14, letter: 'v', pw: 'kvkvvvzvshfkvpzvvvp',
    },
    {
        min: 17, max: 19, letter: 'z', pw: 'zzzzzzzzzzzzzzzzrzqz',
    },
    {
        min: 6, max: 8, letter: 'k', pw: 'kmkkkfgkkk',
    },
    {
        min: 12, max: 16, letter: 'v', pw: 'svxtcjxgdmkvqjfvzln',
    },
    {
        min: 4, max: 10, letter: 'p', pw: 'gljwppnhpc',
    },
    {
        min: 8, max: 15, letter: 'c', pw: 'ccccccccccccccccc',
    },
    {
        min: 1, max: 5, letter: 'w', pw: 'wwwwwwww',
    },
    {
        min: 3, max: 9, letter: 'w', pw: 'jwqgswwbtwwswwq',
    },
    {
        min: 2, max: 18, letter: 't', pw: 'ptblkjvmjwglftpblr',
    },
    {
        min: 8, max: 11, letter: 'n', pw: 'hznznmrvjnm',
    },
    {
        min: 5, max: 6, letter: 'q', pw: 'qqqwrqq',
    },
    {
        min: 4, max: 10, letter: 's', pw: 'scjssfsfcs',
    },
    {
        min: 3, max: 7, letter: 'p', pw: 'pppprpplpppzp',
    },
    {
        min: 6, max: 7, letter: 'z', pw: 'zzzzzpwzz',
    },
    {
        min: 1, max: 4, letter: 'h', pw: 'hhhh',
    },
    {
        min: 14, max: 16, letter: 'r', pw: 'rcrprqrxrrlrjrlrrrlr',
    },
    {
        min: 4, max: 6, letter: 'x', pw: 'xxxlxjxx',
    },
    {
        min: 8, max: 10, letter: 'j', pw: 'jjjjjjjqjcj',
    },
    {
        min: 10, max: 13, letter: 'f', pw: 'ffffffffftfff',
    },
    {
        min: 8, max: 9, letter: 'r', pw: 'rqrzrjhrr',
    },
    {
        min: 7, max: 11, letter: 'm', pw: 'tmfmhvmmpkmp',
    },
    {
        min: 4, max: 7, letter: 'h', pw: 'bjhhlhhh',
    },
    {
        min: 2, max: 3, letter: 'l', pw: 'lwll',
    },
    {
        min: 10, max: 11, letter: 's', pw: 'jssssssssssssssssz',
    },
    {
        min: 13, max: 14, letter: 'p', pw: 'splrwgnphqclrmqf',
    },
    {
        min: 9, max: 11, letter: 'j', pw: 'jsjjjjltjjjjjzpjjdj',
    },
    {
        min: 3, max: 4, letter: 'g', pw: 'gpcwhg',
    },
    {
        min: 5, max: 7, letter: 's', pw: 'ssbsssssss',
    },
    {
        min: 5, max: 8, letter: 'w', pw: 'bgwbjwwnwwwvww',
    },
    {
        min: 9, max: 11, letter: 'f', pw: 'fjcgtktnfpfxrqg',
    },
    {
        min: 2, max: 9, letter: 'j', pw: 'xgmdjfzsfhf',
    },
    {
        min: 12, max: 15, letter: 'f', pw: 'hkcgtffnzcffffffxdjb',
    },
    {
        min: 5, max: 10, letter: 'k', pw: 'kxggklgdrjz',
    },
    {
        min: 6, max: 8, letter: 'b', pw: 'bxbbbbbbb',
    },
    {
        min: 4, max: 10, letter: 'm', pw: 'tmqfmmmmmm',
    },
    {
        min: 3, max: 5, letter: 'g', pw: 'svtqgh',
    },
    {
        min: 9, max: 17, letter: 's', pw: 'ssqssdrsstspssjssj',
    },
    {
        min: 9, max: 11, letter: 's', pw: 'dssssssssslss',
    },
    {
        min: 1, max: 4, letter: 'k', pw: 'kckkqdkkmg',
    },
    {
        min: 3, max: 4, letter: 'w', pw: 'zbhwmkgqfqstwdwhs',
    },
    {
        min: 1, max: 2, letter: 'j', pw: 'jjjjnjj',
    },
    {
        min: 10, max: 14, letter: 'w', pw: 'rlwpdltwwtzdmnwgmdw',
    },
    {
        min: 3, max: 4, letter: 'j', pw: 'bjnx',
    },
    {
        min: 14, max: 18, letter: 'n', pw: 'nrnrnhnjnfwnnnnnrln',
    },
    {
        min: 8, max: 11, letter: 'g', pw: 'gvhwsbhghdgg',
    },
    {
        min: 15, max: 16, letter: 'h', pw: 'hghhhhhhhhhhhhht',
    },
    {
        min: 2, max: 12, letter: 'x', pw: 'xhxxxxxxxxxkxxx',
    },
    {
        min: 8, max: 13, letter: 'n', pw: 'xqnrnndtnznnkxb',
    },
    {
        min: 3, max: 6, letter: 't', pw: 'rbnxbjw',
    },
    {
        min: 6, max: 7, letter: 'v', pw: 'vdfmjxvvv',
    },
    {
        min: 1, max: 13, letter: 'x', pw: 'xxxxxxxxxxxxxxxxxxx',
    },
    {
        min: 3, max: 9, letter: 'm', pw: 'mmmmmmmqmmmm',
    },
    {
        min: 4, max: 6, letter: 'd', pw: 'dddcdkddddcdgvzd',
    },
    {
        min: 5, max: 6, letter: 'w', pw: 'wwgwwhw',
    },
    {
        min: 9, max: 12, letter: 'h', pw: 'lmmwfqczxchc',
    },
    {
        min: 12, max: 15, letter: 'x', pw: 'xgpxxstxxxxxxxsrxz',
    },
    {
        min: 6, max: 10, letter: 'c', pw: 'wsnftlccckchtlqjhmt',
    },
    {
        min: 8, max: 9, letter: 'f', pw: 'ffffffzbd',
    },
    {
        min: 7, max: 10, letter: 'z', pw: 'zzzzbzhzzgzzzzzpzd',
    },
    {
        min: 2, max: 7, letter: 'c', pw: 'pccxccc',
    },
    {
        min: 3, max: 10, letter: 'l', pw: 'zlkmbdffdrhcwsc',
    },
    {
        min: 5, max: 6, letter: 'x', pw: 'xxxmxx',
    },
    {
        min: 15, max: 16, letter: 'b', pw: 'bbbbbbbbbbbbbbjtbbbf',
    },
    {
        min: 4, max: 6, letter: 'm', pw: 'lmmtnmrqwgmqmmmmw',
    },
    {
        min: 7, max: 15, letter: 'j', pw: 'jmpjrjjthvwjcljvnz',
    },
    {
        min: 1, max: 2, letter: 'z', pw: 'gqzj',
    },
    {
        min: 1, max: 6, letter: 'h', pw: 'hhhwhh',
    },
    {
        min: 2, max: 3, letter: 'm', pw: 'mzkm',
    },
    {
        min: 7, max: 9, letter: 'z', pw: 'zzhczvztz',
    },
    {
        min: 6, max: 7, letter: 'w', pw: 'vhkgmcwwjwgw',
    },
    {
        min: 2, max: 3, letter: 'l', pw: 'lsllllplllljlll',
    },
    {
        min: 3, max: 4, letter: 'r', pw: 'mvmr',
    },
    {
        min: 10, max: 12, letter: 'h', pw: 'hzbvhdfwthhhhjwhr',
    },
    {
        min: 7, max: 11, letter: 'x', pw: 'gstsnxjzhsmlnnwdcmt',
    },
    {
        min: 12, max: 13, letter: 'g', pw: 'pjmjghprgnxggf',
    },
    {
        min: 3, max: 4, letter: 'm', pw: 'rfmm',
    },
    {
        min: 6, max: 14, letter: 'd', pw: 'tsdlsjprjndfndhdmzhz',
    },
    {
        min: 2, max: 6, letter: 'b', pw: 'ppbbmhc',
    },
    {
        min: 3, max: 4, letter: 'j', pw: 'jjrkj',
    },
    {
        min: 2, max: 4, letter: 'd', pw: 'ddwd',
    },
    {
        min: 2, max: 3, letter: 'h', pw: 'mblfdbbkdjhhtm',
    },
    {
        min: 4, max: 5, letter: 'q', pw: 'qtqnd',
    },
    {
        min: 2, max: 6, letter: 'g', pw: 'ggggggg',
    },
    {
        min: 3, max: 4, letter: 'c', pw: 'cczdc',
    },
    {
        min: 13, max: 16, letter: 'k', pw: 'kvbgnklxkkwxkqlk',
    },
    {
        min: 2, max: 7, letter: 'p', pw: 'qphjpkpmzfpzlppw',
    },
    {
        min: 5, max: 8, letter: 'c', pw: 'ccccbccnc',
    },
    {
        min: 2, max: 10, letter: 'k', pw: 'kkkkkkkkkkk',
    },
    {
        min: 15, max: 16, letter: 'x', pw: 'xjxpxjxdkxlxfjqj',
    },
    {
        min: 11, max: 15, letter: 'j', pw: 'njjjsjjjjjcbjjt',
    },
    {
        min: 1, max: 3, letter: 'z', pw: 'mzzfz',
    },
    {
        min: 1, max: 5, letter: 'f', pw: 'fffffffffff',
    },
    {
        min: 3, max: 7, letter: 'v', pw: 'jvvwmjvjm',
    },
    {
        min: 2, max: 5, letter: 'r', pw: 'vrrkrrxfqrmv',
    },
    {
        min: 15, max: 16, letter: 'v', pw: 'sbvnlvvdvrbrwvvq',
    },
    {
        min: 3, max: 7, letter: 'g', pw: 'bwghkwggfm',
    },
    {
        min: 7, max: 9, letter: 'v', pw: 'vvvvvvvvjvv',
    },
    {
        min: 3, max: 7, letter: 'm', pw: 'gmmmmktmmb',
    },
    {
        min: 6, max: 12, letter: 't', pw: 'mtbmttttkfth',
    },
    {
        min: 5, max: 9, letter: 'c', pw: 'ccpfchzpcdxcml',
    },
    {
        min: 9, max: 13, letter: 'd', pw: 'ddddddddbdddld',
    },
    {
        min: 2, max: 3, letter: 'g', pw: 'nrkg',
    },
    {
        min: 4, max: 8, letter: 'm', pw: 'mqnpqmxmq',
    },
    {
        min: 2, max: 4, letter: 'p', pw: 'pnpqpf',
    },
    {
        min: 16, max: 19, letter: 'p', pw: 'ppppppppppppppprppzp',
    },
    {
        min: 3, max: 6, letter: 'j', pw: 'jjjlmf',
    },
    {
        min: 1, max: 6, letter: 'k', pw: 'kbnpkkckwktwwqkcff',
    },
    {
        min: 1, max: 4, letter: 'z', pw: 'hzzg',
    },
    {
        min: 5, max: 7, letter: 'b', pw: 'bbbbbbbbbbbbbbsq',
    },
    {
        min: 2, max: 12, letter: 'z', pw: 'zwzzzzzzhzzzzzzzz',
    },
    {
        min: 6, max: 11, letter: 'x', pw: 'nddhcxbtgsxxcq',
    },
    {
        min: 3, max: 5, letter: 'k', pw: 'gkktkkh',
    },
    {
        min: 2, max: 8, letter: 'f', pw: 'wfnbhxlfstfwxrkhdxj',
    },
    {
        min: 5, max: 6, letter: 'r', pw: 'zcrrrr',
    },
    {
        min: 1, max: 2, letter: 'p', pw: 'dqjjwqjnqp',
    },
    {
        min: 4, max: 9, letter: 'g', pw: 'ggngjgggbggvg',
    },
    {
        min: 3, max: 6, letter: 'm', pw: 'mmsmcjmmmmmmmmmm',
    },
    {
        min: 3, max: 17, letter: 'c', pw: 'qvczjdtppwlvclclcw',
    },
    {
        min: 8, max: 9, letter: 'k', pw: 'kkkkkkkwdkkk',
    },
    {
        min: 5, max: 7, letter: 'd', pw: 'gddnldkddd',
    },
    {
        min: 5, max: 9, letter: 'h', pw: 'whkhvhrshllhldphhn',
    },
    {
        min: 11, max: 17, letter: 'q', pw: 'qqqqqzqqqqcqqqqqdqqq',
    },
    {
        min: 5, max: 6, letter: 'k', pw: 'fjszvkzmhshdd',
    },
    {
        min: 6, max: 8, letter: 'k', pw: 'kkkkkkzk',
    },
    {
        min: 11, max: 13, letter: 'j', pw: 'jjjjjjjjjjjjjjj',
    },
    {
        min: 4, max: 10, letter: 'q', pw: 'slwqqsqkbqqb',
    },
    {
        min: 7, max: 8, letter: 's', pw: 'cvwvzswq',
    },
    {
        min: 10, max: 14, letter: 'c', pw: 'tvhxzvpdcckdzc',
    },
    {
        min: 1, max: 5, letter: 'p', pw: 'jpppppp',
    },
    {
        min: 12, max: 15, letter: 'g', pw: 'spggvdggsmfhggg',
    },
    {
        min: 5, max: 11, letter: 'n', pw: 'zlgnqkkqlhmrgn',
    },
    {
        min: 11, max: 18, letter: 'j', pw: 'zrjgljjljjjzjhjkrj',
    },
    {
        min: 10, max: 14, letter: 't', pw: 'tttttttktdttttttcdtt',
    },
    {
        min: 10, max: 11, letter: 'p', pw: 'szxpqprpchkwvwqqk',
    },
    {
        min: 9, max: 14, letter: 't', pw: 'ttttttgtmtfmttttttt',
    },
    {
        min: 10, max: 15, letter: 'n', pw: 'nnnnnnnznbpnnnxn',
    },
    {
        min: 1, max: 4, letter: 'l', pw: 'lllll',
    },
    {
        min: 4, max: 5, letter: 'w', pw: 'wbhhjpwbbft',
    },
    {
        min: 10, max: 12, letter: 'r', pw: 'rhrrlcrlrrmrrrwlrbx',
    },
    {
        min: 13, max: 14, letter: 'g', pw: 'ggggggggggggggggg',
    },
    {
        min: 7, max: 9, letter: 'f', pw: 'fvvwfffff',
    },
    {
        min: 9, max: 15, letter: 'n', pw: 'pnnnnnnnlndnnnnnnnn',
    },
    {
        min: 5, max: 7, letter: 'b', pw: 'bbbbbbbb',
    },
    {
        min: 8, max: 15, letter: 'v', pw: 'ldhwnvvwtxbskzvk',
    },
    {
        min: 10, max: 15, letter: 't', pw: 'tgkkgtfttxtttqbtttv',
    },
    {
        min: 5, max: 15, letter: 's', pw: 'hlsfskvqssskxds',
    },
    {
        min: 2, max: 7, letter: 'g', pw: 'wlnqrrdw',
    },
    {
        min: 8, max: 9, letter: 'w', pw: 'mwpbdlmmj',
    },
    {
        min: 5, max: 11, letter: 'h', pw: 'lclzlhhhhfvrrrzvnkfz',
    },
    {
        min: 8, max: 9, letter: 'c', pw: 'jcwdnxgnv',
    },
    {
        min: 1, max: 6, letter: 'h', pw: 'dchmhm',
    },
    {
        min: 9, max: 14, letter: 's', pw: 'ssbdsvccsxtpnszv',
    },
    {
        min: 3, max: 5, letter: 'd', pw: 'dddddd',
    },
    {
        min: 1, max: 6, letter: 'w', pw: 'vwwwwf',
    },
    {
        min: 5, max: 6, letter: 'f', pw: 'lrffxb',
    },
    {
        min: 16, max: 17, letter: 'n', pw: 'nnnnnnnnnnnnwnnnnnnn',
    },
    {
        min: 4, max: 5, letter: 'x', pw: 'qlxjptn',
    },
    {
        min: 4, max: 5, letter: 'd', pw: 'ndddd',
    },
    {
        min: 1, max: 9, letter: 'r', pw: 'zrrrrrcrr',
    },
    {
        min: 4, max: 5, letter: 'r', pw: 'brnrr',
    },
    {
        min: 15, max: 16, letter: 'r', pw: 'rrrrrrrrrrrrrrhrrrrr',
    },
    {
        min: 4, max: 8, letter: 'w', pw: 'wwvdwwwwwww',
    },
    {
        min: 12, max: 14, letter: 'f', pw: 'ffffffdffffpfhfdg',
    },
    {
        min: 3, max: 9, letter: 'h', pw: 'srhvhkvsv',
    },
    {
        min: 17, max: 18, letter: 'j', pw: 'jzjjjjjsjjjjjjjjjj',
    },
    {
        min: 4, max: 8, letter: 't', pw: 'lvpttpct',
    },
    {
        min: 2, max: 3, letter: 't', pw: 'ttqt',
    },
    {
        min: 3, max: 11, letter: 'v', pw: 'wpvmlbvbpvs',
    },
    {
        min: 10, max: 11, letter: 'x', pw: 'vrkmmglwxxxsxsnxf',
    },
    {
        min: 4, max: 7, letter: 'k', pw: 'kkkkkkk',
    },
    {
        min: 3, max: 5, letter: 'k', pw: 'kkkkkkk',
    },
    {
        min: 13, max: 18, letter: 'v', pw: 'rkvvvlkzhvvmbgvvvk',
    },
    {
        min: 1, max: 2, letter: 'p', pw: 'prpppg',
    },
    {
        min: 8, max: 11, letter: 'c', pw: 'cxkchzcchccdzqfc',
    },
    {
        min: 1, max: 6, letter: 'z', pw: 'zzwzzz',
    },
    {
        min: 3, max: 4, letter: 'z', pw: 'czpdt',
    },
    {
        min: 11, max: 12, letter: 'd', pw: 'ddddddddddddc',
    },
    {
        min: 6, max: 8, letter: 'l', pw: 'llldlkvzll',
    },
    {
        min: 5, max: 15, letter: 'n', pw: 'wngptdmbvqftdvw',
    },
    {
        min: 10, max: 12, letter: 'j', pw: 'qjxmgghlbklxcpd',
    },
    {
        min: 4, max: 6, letter: 'z', pw: 'mdhzpzlw',
    },
    {
        min: 11, max: 13, letter: 'c', pw: 'cccccczgccccccccccc',
    },
    {
        min: 5, max: 10, letter: 'z', pw: 'zzzzxzzzzvzzzzmz',
    },
    {
        min: 7, max: 14, letter: 'c', pw: 'frhncvjxdcccbg',
    },
    {
        min: 12, max: 19, letter: 'g', pw: 'gggggggggggggggggggg',
    },
    {
        min: 12, max: 13, letter: 'n', pw: 'nwsknnnnnnnnnqtnnxn',
    },
    {
        min: 11, max: 12, letter: 'd', pw: 'ddpddddnrddw',
    },
    {
        min: 8, max: 9, letter: 's', pw: 'bssssfsss',
    },
    {
        min: 1, max: 2, letter: 't', pw: 'ttttttttttt',
    },
    {
        min: 8, max: 10, letter: 'b', pw: 'bbbbbbbrbfbbb',
    },
    {
        min: 3, max: 7, letter: 'c', pw: 'jwtdcccgj',
    },
    {
        min: 4, max: 5, letter: 'j', pw: 'djjjjhm',
    },
    {
        min: 2, max: 7, letter: 'v', pw: 'snsflvvrf',
    },
    {
        min: 6, max: 15, letter: 'q', pw: 'qqqqvrqqqqqqqqkqq',
    },
    {
        min: 8, max: 12, letter: 'q', pw: 'wbqqxvflbqxqzq',
    },
    {
        min: 9, max: 15, letter: 't', pw: 'tttttztttjwdtsttpw',
    },
    {
        min: 1, max: 8, letter: 'l', pw: 'lllllllll',
    },
    {
        min: 7, max: 12, letter: 'f', pw: 'fffffffffffsf',
    },
    {
        min: 4, max: 5, letter: 'm', pw: 'lklqm',
    },
    {
        min: 13, max: 15, letter: 't', pw: 'trtttttttthtgtt',
    },
    {
        min: 4, max: 5, letter: 'q', pw: 'qqqqqqqqq',
    },
    {
        min: 1, max: 10, letter: 'r', pw: 'prrrrrrrrhr',
    },
    {
        min: 2, max: 5, letter: 'd', pw: 'cprddmdhdvd',
    },
    {
        min: 5, max: 6, letter: 's', pw: 'qsrxss',
    },
    {
        min: 4, max: 5, letter: 'q', pw: 'vwlvqqrplzqs',
    },
    {
        min: 14, max: 18, letter: 'd', pw: 'ddddddddlddddwdddgv',
    },
    {
        min: 2, max: 5, letter: 'p', pw: 'ppmqxptpp',
    },
    {
        min: 12, max: 13, letter: 'w', pw: 'wwwwwwwwkwwjtwww',
    },
    {
        min: 6, max: 7, letter: 'f', pw: 'spfffsnzc',
    },
    {
        min: 9, max: 16, letter: 's', pw: 'zdmsgmcbspjtwsdspwvs',
    },
    {
        min: 11, max: 17, letter: 'z', pw: 'zzzzzzzzzzzzzzzzzz',
    },
    {
        min: 11, max: 16, letter: 'j', pw: 'jjjtjjcjjjbjbldv',
    },
    {
        min: 6, max: 12, letter: 'b', pw: 'bbbbbbbbjbbbbb',
    },
    {
        min: 4, max: 7, letter: 'c', pw: 'cccgcctc',
    },
    {
        min: 3, max: 4, letter: 'f', pw: 'fffjhf',
    },
    {
        min: 10, max: 19, letter: 'g', pw: 'ggjgggggjdggkgglggg',
    },
    {
        min: 1, max: 13, letter: 'x', pw: 'xvqpxzmjjxklx',
    },
    {
        min: 6, max: 8, letter: 'k', pw: 'kkkkkkkd',
    },
    {
        min: 7, max: 11, letter: 'r', pw: 'rhfrxrrttnrfrgqphr',
    },
    {
        min: 10, max: 11, letter: 'w', pw: 'hwwwwwncqwpwqwfvzww',
    },
    {
        min: 3, max: 4, letter: 'h', pw: 'hhmhh',
    },
    {
        min: 1, max: 5, letter: 'n', pw: 'zncnnwhcnqj',
    },
    {
        min: 3, max: 10, letter: 'm', pw: 'mmcmmmmlmcmmmmm',
    },
    {
        min: 1, max: 5, letter: 'j', pw: 'jjljx',
    },
    {
        min: 5, max: 8, letter: 'b', pw: 'bbbbbbbbbb',
    },
    {
        min: 3, max: 4, letter: 'x', pw: 'bvxxxxn',
    },
    {
        min: 1, max: 3, letter: 'b', pw: 'bfkbbbb',
    },
    {
        min: 2, max: 7, letter: 'm', pw: 'mjmmmmmm',
    },
    {
        min: 4, max: 7, letter: 'n', pw: 'znnnnnnn',
    },
    {
        min: 12, max: 14, letter: 'h', pw: 'kvlxhkdqbvwhhh',
    },
    {
        min: 11, max: 12, letter: 'q', pw: 'qlgqqqqdmqqqqqqsqn',
    },
    {
        min: 2, max: 5, letter: 'p', pw: 'pppppppvptvw',
    },
    {
        min: 4, max: 5, letter: 'c', pw: 'ccccccvr',
    },
    {
        min: 1, max: 5, letter: 'b', pw: 'xbqbn',
    },
    {
        min: 7, max: 8, letter: 'p', pw: 'pxnddnpgsp',
    },
    {
        min: 2, max: 3, letter: 'j', pw: 'nxxjs',
    },
    {
        min: 1, max: 4, letter: 'j', pw: 'vtdfk',
    },
    {
        min: 7, max: 12, letter: 'l', pw: 'mlcdlklmpbjl',
    },
    {
        min: 4, max: 6, letter: 'l', pw: 'lqgrml',
    },
    {
        min: 12, max: 14, letter: 'v', pw: 'vfplrnnvhlvhzk',
    },
    {
        min: 2, max: 5, letter: 'x', pw: 'xjkxbxxx',
    },
    {
        min: 10, max: 12, letter: 'v', pw: 'vvvvgvfjwvvjvvv',
    },
    {
        min: 1, max: 3, letter: 'w', pw: 'brprgblcpwhhp',
    },
    {
        min: 3, max: 8, letter: 'n', pw: 'nzdnnnnnnnvznnnnx',
    },
    {
        min: 3, max: 6, letter: 'p', pw: 'dghpfthx',
    },
    {
        min: 8, max: 9, letter: 'r', pw: 'frrrrrrmj',
    },
    {
        min: 12, max: 13, letter: 'c', pw: 'wnmxtcqqgcdcdpp',
    },
    {
        min: 1, max: 3, letter: 'p', pw: 'zpsp',
    },
    {
        min: 11, max: 12, letter: 'z', pw: 'zpzwzzszmgzgvztdzmrz',
    },
    {
        min: 15, max: 16, letter: 'd', pw: 'dxdqddddrdddddzzd',
    },
    {
        min: 4, max: 15, letter: 'g', pw: 'gbgrsgggjgggqdvnhggg',
    },
    {
        min: 3, max: 4, letter: 'j', pw: 'vjjmpl',
    },
    {
        min: 17, max: 18, letter: 'b', pw: 'bbbbbbbbbbbbbbbbbbb',
    },
    {
        min: 14, max: 17, letter: 'h', pw: 'vzhhhpqhqbgvghckh',
    },
    {
        min: 6, max: 16, letter: 'w', pw: 'wlwdwvwwbwwxwwwv',
    },
    {
        min: 3, max: 4, letter: 'x', pw: 'cxgj',
    },
    {
        min: 10, max: 12, letter: 't', pw: 'ttjttztlgrtbttst',
    },
    {
        min: 16, max: 17, letter: 'x', pw: 'xtxxrxxxgxxxbqxfr',
    },
    {
        min: 8, max: 12, letter: 'j', pw: 'gjnnbxhgcgpd',
    },
    {
        min: 3, max: 4, letter: 'b', pw: 'pkkbfb',
    },
    {
        min: 2, max: 3, letter: 'g', pw: 'gggmgwgggggggghggg',
    },
    {
        min: 8, max: 10, letter: 'z', pw: 'zzzszzpjmzzzz',
    },
    {
        min: 10, max: 11, letter: 'r', pw: 'xbrkrjcsrtmrgtrrm',
    },
    {
        min: 6, max: 7, letter: 'n', pw: 'blmcznpnsbsw',
    },
    {
        min: 3, max: 4, letter: 'n', pw: 'nwzqznxn',
    },
    {
        min: 6, max: 9, letter: 'j', pw: 'jnjhvjxjjzc',
    },
    {
        min: 4, max: 5, letter: 'd', pw: 'qrddth',
    },
    {
        min: 1, max: 4, letter: 'p', pw: 'pphp',
    },
    {
        min: 9, max: 10, letter: 'j', pw: 'mhxwjjjbjj',
    },
    {
        min: 5, max: 6, letter: 'l', pw: 'llcllc',
    },
    {
        min: 1, max: 3, letter: 't', pw: 'rtrttvtttttt',
    },
    {
        min: 2, max: 14, letter: 'c', pw: 'ccxccccfgcdccctbzgqc',
    },
    {
        min: 3, max: 7, letter: 'k', pw: 'kkrkkkq',
    },
    {
        min: 5, max: 10, letter: 'z', pw: 'zzzdqkzzgstqzzzz',
    },
    {
        min: 1, max: 3, letter: 'w', pw: 'pjbt',
    },
    {
        min: 6, max: 10, letter: 'm', pw: 'dlmsmrmmmmxmrmmmm',
    },
    {
        min: 1, max: 4, letter: 'v', pw: 'qvlsm',
    },
    {
        min: 11, max: 19, letter: 'd', pw: 'ddddddddddkdddddddpd',
    },
    {
        min: 2, max: 3, letter: 's', pw: 'gsknvsrcwfbxnk',
    },
    {
        min: 9, max: 13, letter: 'q', pw: 'lvpvdqvzqndtbsrwjf',
    },
    {
        min: 2, max: 6, letter: 'n', pw: 'sjspfczdsnt',
    },
    {
        min: 2, max: 4, letter: 'c', pw: 'cccw',
    },
    {
        min: 8, max: 10, letter: 'x', pw: 'xqhcxzxxxxfdx',
    },
    {
        min: 3, max: 7, letter: 'l', pw: 'llltwlll',
    },
    {
        min: 2, max: 4, letter: 'm', pw: 'khqmnm',
    },
    {
        min: 3, max: 12, letter: 'j', pw: 'jvshgpptttfgkrnwf',
    },
    {
        min: 11, max: 12, letter: 'k', pw: 'kkkkkkpdkkkk',
    },
    {
        min: 1, max: 2, letter: 'd', pw: 'fcdd',
    },
    {
        min: 11, max: 12, letter: 'l', pw: 'dpnxdjhclqllqsd',
    },
    {
        min: 8, max: 9, letter: 'p', pw: 'tnphpwrppgm',
    },
    {
        min: 6, max: 7, letter: 'c', pw: 'frhvcll',
    },
    {
        min: 4, max: 9, letter: 'x', pw: 'xxxxxxxxxx',
    },
    {
        min: 3, max: 4, letter: 'n', pw: 'znnn',
    },
    {
        min: 2, max: 3, letter: 'h', pw: 'hmjw',
    },
    {
        min: 7, max: 8, letter: 'm', pw: 'qvtpmwmm',
    },
    {
        min: 10, max: 12, letter: 'c', pw: 'hbccgmvbhgccck',
    },
    {
        min: 6, max: 7, letter: 'j', pw: 'jjjjgjjjjjjjjjjj',
    },
    {
        min: 3, max: 6, letter: 'm', pw: 'rmrdgddjtmm',
    },
    {
        min: 9, max: 10, letter: 'h', pw: 'hhhhhhhhhhh',
    },
    {
        min: 9, max: 16, letter: 'w', pw: 'fwwwnmkwwjwcszwb',
    },
    {
        min: 3, max: 10, letter: 'v', pw: 'wkvxpxjcsvqgv',
    },
    {
        min: 11, max: 18, letter: 's', pw: 'ssssssssssqssssssvs',
    },
    {
        min: 5, max: 14, letter: 'v', pw: 'bxbkvfvnvnvvwf',
    },
    {
        min: 11, max: 13, letter: 'k', pw: 'kdbkwbpkwjkkk',
    },
    {
        min: 4, max: 7, letter: 'n', pw: 'ncnnkvnnn',
    },
    {
        min: 6, max: 9, letter: 'q', pw: 'qxmvqmpqqdqsqjkhqq',
    },
    {
        min: 6, max: 8, letter: 'p', pw: 'ppppppspfpp',
    },
    {
        min: 7, max: 8, letter: 'w', pw: 'wwwhcsttd',
    },
    {
        min: 18, max: 20, letter: 't', pw: 'tlrzstttttrttdmxhxtt',
    },
    {
        min: 10, max: 11, letter: 'h', pw: 'hhxzchbhhhshhbhv',
    },
    {
        min: 14, max: 17, letter: 'h', pw: 'jbfhhthndhwkhhbhh',
    },
    {
        min: 12, max: 13, letter: 't', pw: 'tltttctbpmztrxnf',
    },
    {
        min: 4, max: 15, letter: 'w', pw: 'mbgcvdvhhwbpckxwsw',
    },
    {
        min: 4, max: 5, letter: 'r', pw: 'rrrrrlrvzrrhkr',
    },
    {
        min: 1, max: 3, letter: 'q', pw: 'qplqqdqqqqqvmqz',
    },
    {
        min: 6, max: 8, letter: 'r', pw: 'rvmrrftw',
    },
    {
        min: 1, max: 2, letter: 'c', pw: 'cczcrncddc',
    },
    {
        min: 4, max: 7, letter: 'j', pw: 'cjrbtlkxj',
    },
    {
        min: 2, max: 5, letter: 't', pw: 'httgxlxfdskjgmdk',
    },
    {
        min: 4, max: 6, letter: 'z', pw: 'jtzzlv',
    },
    {
        min: 8, max: 9, letter: 'd', pw: 'ndndddddd',
    },
    {
        min: 5, max: 12, letter: 'f', pw: 'ncmjfbkmzxmfxfvnfnbw',
    },
    {
        min: 2, max: 5, letter: 'z', pw: 'zzfnz',
    },
    {
        min: 1, max: 6, letter: 'd', pw: 'sdddpr',
    },
    {
        min: 12, max: 14, letter: 'v', pw: 'vdvvvvvvvvvkvvv',
    },
    {
        min: 11, max: 15, letter: 'm', pw: 'jtgmzcmmmxnpvrtmmm',
    },
    {
        min: 3, max: 8, letter: 'd', pw: 'vqtddpdqdfddhcd',
    },
    {
        min: 4, max: 5, letter: 'l', pw: 'llplr',
    },
    {
        min: 2, max: 4, letter: 'f', pw: 'fcfzh',
    },
    {
        min: 3, max: 6, letter: 'v', pw: 'lbvklvp',
    },
    {
        min: 15, max: 16, letter: 'k', pw: 'kkkkkkkkkkkkkkkkk',
    },
    {
        min: 6, max: 7, letter: 'c', pw: 'ccccccccc',
    },
    {
        min: 11, max: 16, letter: 'h', pw: 'hhhhhhhhhhhhhhhsh',
    },
    {
        min: 12, max: 14, letter: 'l', pw: 'llllllwllllllllllll',
    },
    {
        min: 11, max: 12, letter: 'v', pw: 'bvslvwvzgwnv',
    },
    {
        min: 4, max: 5, letter: 'l', pw: 'xllllll',
    },
    {
        min: 2, max: 3, letter: 'c', pw: 'xccc',
    },
    {
        min: 7, max: 17, letter: 'j', pw: 'jjjjjjjjjjjjjjxjdjjj',
    },
    {
        min: 18, max: 19, letter: 'w', pw: 'wrwwwwwxwwplwhwwwww',
    },
    {
        min: 4, max: 5, letter: 'z', pw: 'tzzncf',
    },
    {
        min: 1, max: 2, letter: 'g', pw: 'gpgswkqsnxxkn',
    },
    {
        min: 10, max: 12, letter: 'f', pw: 'xpfffrxfqfcfff',
    },
    {
        min: 14, max: 16, letter: 'r', pw: 'rrrrrrrzxrrrrrrr',
    },
    {
        min: 8, max: 17, letter: 'd', pw: 'dddddddddddddddddd',
    },
    {
        min: 7, max: 11, letter: 'j', pw: 'kjvjgbjqkwjjjs',
    },
    {
        min: 7, max: 11, letter: 'x', pw: 'xxxxxxxxxxxxxx',
    },
    {
        min: 13, max: 16, letter: 'd', pw: 'cddddddgddddrddgdzd',
    },
    {
        min: 11, max: 15, letter: 'x', pw: 'xhpxxxxxxbktlxr',
    },
    {
        min: 5, max: 19, letter: 'p', pw: 'ppkpsnhkpttdqpvlhzp',
    },
    {
        min: 10, max: 14, letter: 'f', pw: 'xcfzqffcnfprzf',
    },
    {
        min: 3, max: 17, letter: 'c', pw: 'bdcmfmcptmhqczphc',
    },
    {
        min: 1, max: 12, letter: 'd', pw: 'ddddddddddmd',
    },
    {
        min: 6, max: 7, letter: 'h', pw: 'nnbphmjb',
    },
    {
        min: 14, max: 15, letter: 'w', pw: 'dmlvwvxwgcvfgwwl',
    },
    {
        min: 7, max: 8, letter: 'v', pw: 'qlvvvgjrcvwvvlszgvc',
    },
    {
        min: 2, max: 4, letter: 'c', pw: 'ncrc',
    },
    {
        min: 5, max: 7, letter: 'q', pw: 'qqmtqqqx',
    },
    {
        min: 13, max: 14, letter: 'c', pw: 'pcnbccwtcczcccg',
    },
    {
        min: 1, max: 5, letter: 't', pw: 'dpgtlsw',
    },
    {
        min: 12, max: 13, letter: 'f', pw: 'zrcqtjjqjfrqp',
    },
    {
        min: 6, max: 12, letter: 'n', pw: 'mbhwrnnxzzjnlrmm',
    },
    {
        min: 5, max: 7, letter: 'v', pw: 'rvtrvhvtnvmvvmdv',
    },
    {
        min: 9, max: 14, letter: 'g', pw: 'ggggggggfggggl',
    },
    {
        min: 1, max: 13, letter: 'q', pw: 'gqqqgqqqqqqqpqq',
    },
    {
        min: 8, max: 15, letter: 'k', pw: 'tkdkdrgkdkktkrkdk',
    },
    {
        min: 9, max: 11, letter: 'm', pw: 'mpvmldmmbmj',
    },
    {
        min: 2, max: 6, letter: 'c', pw: 'chcccgclcrcc',
    },
    {
        min: 5, max: 7, letter: 'l', pw: 'llllhlllll',
    },
    {
        min: 11, max: 12, letter: 'g', pw: 'ggggggggggggg',
    },
    {
        min: 2, max: 3, letter: 'x', pw: 'bvcx',
    },
    {
        min: 11, max: 14, letter: 'b', pw: 'bbbbbbbbbqbsbb',
    },
    {
        min: 3, max: 6, letter: 'x', pw: 'xxxxxxx',
    },
    {
        min: 9, max: 16, letter: 'g', pw: 'bgggvwjhgmggpqjgv',
    },
    {
        min: 6, max: 9, letter: 'n', pw: 'ngsdrnnnknxgqdn',
    },
    {
        min: 5, max: 6, letter: 'x', pw: 'btjbxx',
    },
    {
        min: 9, max: 11, letter: 't', pw: 'ttttctttdtktttt',
    },
    {
        min: 6, max: 7, letter: 's', pw: 'ncxcsds',
    },
    {
        min: 5, max: 17, letter: 's', pw: 'ssssssssssssssssss',
    },
    {
        min: 3, max: 8, letter: 't', pw: 'ctdvrttftptt',
    },
    {
        min: 9, max: 10, letter: 'j', pw: 'fllmfjqjtqjjjtjgjjj',
    },
    {
        min: 9, max: 13, letter: 'z', pw: 'qzzhdznqfxrrrpw',
    },
    {
        min: 4, max: 6, letter: 'k', pw: 'hhkkqkwkk',
    },
    {
        min: 12, max: 13, letter: 'q', pw: 'qqdqqsqrrqqnx',
    },
    {
        min: 4, max: 6, letter: 'j', pw: 'hjtbnnfbhqbd',
    },
    {
        min: 3, max: 10, letter: 'w', pw: 'wwcqtplgdwzc',
    },
    {
        min: 11, max: 13, letter: 'd', pw: 'wdxddddcdvddddd',
    },
    {
        min: 3, max: 6, letter: 'd', pw: 'rcxlqm',
    },
    {
        min: 7, max: 8, letter: 'w', pw: 'wgcpwnxldswgc',
    },
    {
        min: 6, max: 10, letter: 'p', pw: 'pppppbpppwp',
    },
    {
        min: 5, max: 10, letter: 'w', pw: 'wbfwdgwfzrrlwft',
    },
    {
        min: 10, max: 11, letter: 'c', pw: 'ccccccccccbp',
    },
    {
        min: 3, max: 6, letter: 'q', pw: 'qqtqqbqq',
    },
    {
        min: 12, max: 15, letter: 'k', pw: 'kkkkkkkkkkkkkkk',
    },
    {
        min: 12, max: 15, letter: 'x', pw: 'xxxxxxxxxxxxxxxx',
    },
    {
        min: 3, max: 16, letter: 'x', pw: 'xvlxmxnnxxxkxxxj',
    },
    {
        min: 3, max: 13, letter: 'z', pw: 'zfzxglzkhzrbzpzdtn',
    },
    {
        min: 6, max: 14, letter: 'f', pw: 'mfffflfffffffzfff',
    },
    {
        min: 10, max: 12, letter: 'm', pw: 'lnnkhjthrndmcj',
    },
    {
        min: 12, max: 13, letter: 'k', pw: 'kkkkkkkkqkkjbk',
    },
    {
        min: 3, max: 4, letter: 'c', pw: 'kzcz',
    },
    {
        min: 3, max: 4, letter: 'h', pw: 'phhhl',
    },
    {
        min: 5, max: 15, letter: 'n', pw: 'nnnnnbnsnnnnnnqnnnn',
    },
    {
        min: 12, max: 16, letter: 'v', pw: 'zvccvkvcfvplvvcx',
    },
    {
        min: 1, max: 3, letter: 'z', pw: 'qzzzz',
    },
    {
        min: 2, max: 3, letter: 'p', pw: 'fjzkvmcsp',
    },
    {
        min: 8, max: 10, letter: 'c', pw: 'rccdvcckkcc',
    },
    {
        min: 3, max: 11, letter: 'l', pw: 'lllllllnlll',
    },
    {
        min: 5, max: 8, letter: 'w', pw: 'wwwdffwwwwgvwf',
    },
    {
        min: 9, max: 11, letter: 'z', pw: 'kjzrzzkhlzpzzzzzznl',
    },
    {
        min: 9, max: 16, letter: 't', pw: 'ttttttttdttttttqttt',
    },
    {
        min: 14, max: 15, letter: 's', pw: 'sfsfzlshbskndfcz',
    },
    {
        min: 6, max: 8, letter: 'k', pw: 'kkkkkkkkk',
    },
    {
        min: 2, max: 4, letter: 'k', pw: 'wpck',
    },
    {
        min: 8, max: 9, letter: 'v', pw: 'gtmcmvkvzbcrgvc',
    },
    {
        min: 6, max: 10, letter: 'v', pw: 'vvvvvmvvvvv',
    },
    {
        min: 10, max: 11, letter: 'h', pw: 'lhhhxhhhvwmmghfwk',
    },
    {
        min: 8, max: 11, letter: 'w', pw: 'wwwwwwwfwwlww',
    },
    {
        min: 5, max: 17, letter: 'b', pw: 'bbbbbbbbbbbbbbbbbb',
    },
    {
        min: 4, max: 11, letter: 'j', pw: 'jjjjjjjjjjjj',
    },
    {
        min: 7, max: 13, letter: 'p', pw: 'mpppppnnpppptcppp',
    },
    {
        min: 10, max: 11, letter: 'w', pw: 'wwwwwxwwmvwww',
    },
    {
        min: 6, max: 8, letter: 'n', pw: 'nmnsnknt',
    },
    {
        min: 1, max: 7, letter: 'z', pw: 'zzzzzhzzzb',
    },
    {
        min: 2, max: 6, letter: 'v', pw: 'kccntgvhvggvdfnq',
    },
    {
        min: 16, max: 17, letter: 'g', pw: 'gggggggggggggggxgg',
    },
    {
        min: 6, max: 8, letter: 'v', pw: 'brvpfvgvpvvgjpzq',
    },
    {
        min: 2, max: 10, letter: 'w', pw: 'sgnqldnccv',
    },
    {
        min: 3, max: 4, letter: 'z', pw: 'dzxkzzszzrpdgx',
    },
    {
        min: 7, max: 10, letter: 'q', pw: 'qqqtqqmqqqqq',
    },
    {
        min: 4, max: 9, letter: 'x', pw: 'xxxnxwxxjxxxx',
    },
    {
        min: 10, max: 12, letter: 'd', pw: 'ddddddddqddq',
    },
    {
        min: 7, max: 8, letter: 'z', pw: 'zrzzzzzs',
    },
    {
        min: 1, max: 19, letter: 'w', pw: 'wwwwwwwwwwwwwwwwwww',
    },
    {
        min: 3, max: 4, letter: 'l', pw: 'jqxlf',
    },
    {
        min: 13, max: 15, letter: 't', pw: 'ctbllrttmtqttxt',
    },
    {
        min: 12, max: 13, letter: 'p', pw: 'ppbppppqfppts',
    },
    {
        min: 6, max: 11, letter: 'p', pw: 'pklpppljpcpgdpv',
    },
    {
        min: 8, max: 9, letter: 's', pw: 'ssstsssss',
    },
    {
        min: 13, max: 16, letter: 't', pw: 'ttttkvmttntwtpft',
    },
    {
        min: 5, max: 8, letter: 'x', pw: 'xkvxfxxpg',
    },
    {
        min: 2, max: 18, letter: 's', pw: 'fgfrrxjqfrxskgkqvj',
    },
    {
        min: 1, max: 4, letter: 'v', pw: 'fwmlrv',
    },
    {
        min: 9, max: 10, letter: 'x', pw: 'xxxxxxxxxxx',
    },
    {
        min: 6, max: 13, letter: 'f', pw: 'wbwctctbsptfj',
    },
    {
        min: 4, max: 13, letter: 'n', pw: 'nnnnnnnnnnnnrn',
    },
    {
        min: 8, max: 9, letter: 'n', pw: 'nmnsnnmnnlhlhvjx',
    },
    {
        min: 12, max: 14, letter: 'g', pw: 'gggggggggggczv',
    },
    {
        min: 5, max: 8, letter: 'r', pw: 'rzqrrrrkzhr',
    },
    {
        min: 12, max: 17, letter: 'k', pw: 'kkkkkhkkkkxkkkkbkk',
    },
    {
        min: 6, max: 8, letter: 'h', pw: 'hhhhhhhqqmhh',
    },
    {
        min: 1, max: 3, letter: 'h', pw: 'dhmmghrhthhhvqpthf',
    },
    {
        min: 3, max: 4, letter: 't', pw: 'ttkft',
    },
    {
        min: 3, max: 6, letter: 'w', pw: 'fwnwwgqq',
    },
    {
        min: 8, max: 9, letter: 'h', pw: 'whpwkhbhh',
    },
    {
        min: 9, max: 10, letter: 'k', pw: 'kkkkkkksbxk',
    },
    {
        min: 4, max: 6, letter: 'k', pw: 'qfkkrkwr',
    },
    {
        min: 3, max: 6, letter: 'l', pw: 'flllgl',
    },
    {
        min: 6, max: 7, letter: 'z', pw: 'zzzzzqmzzzzzz',
    },
    {
        min: 2, max: 3, letter: 'h', pw: 'zhhzh',
    },
    {
        min: 4, max: 9, letter: 't', pw: 'gvqnsttftcd',
    },
    {
        min: 3, max: 6, letter: 'c', pw: 'zcbcsktcmhrkgc',
    },
    {
        min: 5, max: 8, letter: 'm', pw: 'zmqmmmmmmmmmmf',
    },
    {
        min: 1, max: 2, letter: 'c', pw: 'ccvcc',
    },
    {
        min: 7, max: 9, letter: 's', pw: 'ssssssjstsssssssssss',
    },
    {
        min: 12, max: 19, letter: 't', pw: 'ttftttttpnkttttttwt',
    },
    {
        min: 5, max: 6, letter: 'm', pw: 'lpqmmmfmvzb',
    },
    {
        min: 9, max: 11, letter: 'd', pw: 'ddddddddvdldd',
    },
    {
        min: 7, max: 9, letter: 'k', pw: 'kkkkkkkkk',
    },
    {
        min: 12, max: 15, letter: 'l', pw: 'lllllllllllpllllll',
    },
    {
        min: 1, max: 4, letter: 'b', pw: 'kzbbb',
    },
    {
        min: 18, max: 19, letter: 'b', pw: 'bxvlzxjgzbdbwfrjhvv',
    },
    {
        min: 2, max: 9, letter: 'w', pw: 'whwwwnwwcwwwwwww',
    },
    {
        min: 4, max: 11, letter: 'f', pw: 'ffffffffsff',
    },
    {
        min: 5, max: 6, letter: 'v', pw: 'fhvcvv',
    },
    {
        min: 1, max: 5, letter: 'm', pw: 'qqmpfmm',
    },
    {
        min: 6, max: 8, letter: 'm', pw: 'mmmmkvvhmcmmmmm',
    },
    {
        min: 2, max: 6, letter: 'c', pw: 'gcpvrcfhpsrpbtffnwk',
    },
    {
        min: 5, max: 6, letter: 'q', pw: 'sqkfqq',
    },
    {
        min: 3, max: 4, letter: 'p', pw: 'mbqppdqkdgkbf',
    },
    {
        min: 8, max: 11, letter: 'b', pw: 'bbbbbbbtbbpbbb',
    },
    {
        min: 5, max: 6, letter: 'g', pw: 'lmggqm',
    },
    {
        min: 3, max: 7, letter: 'q', pw: 'hnqhnqq',
    },
    {
        min: 2, max: 4, letter: 'r', pw: 'rrrlrd',
    },
    {
        min: 7, max: 8, letter: 'r', pw: 'rrrbrlrr',
    },
    {
        min: 5, max: 9, letter: 'j', pw: 'jjjdqjjjjjjjqjjckg',
    },
    {
        min: 6, max: 7, letter: 'l', pw: 'lllwpll',
    },
    {
        min: 1, max: 4, letter: 'w', pw: 'wxswwkw',
    },
    {
        min: 17, max: 18, letter: 'w', pw: 'wnxxmrvqmcgmntpfxnh',
    },
    {
        min: 1, max: 5, letter: 'c', pw: 'ccccc',
    },
    {
        min: 4, max: 8, letter: 'v', pw: 'vvxvvvvw',
    },
    {
        min: 8, max: 9, letter: 'p', pw: 'pppppppmpppp',
    },
    {
        min: 1, max: 7, letter: 'z', pw: 'zzzzzzmzzz',
    },
    {
        min: 10, max: 12, letter: 'q', pw: 'qqqqqqqqqssmqq',
    },
    {
        min: 2, max: 5, letter: 'x', pw: 'mxxnv',
    },
    {
        min: 4, max: 19, letter: 'r', pw: 'rrrlrrrrrrrzfrlrrrfr',
    },
    {
        min: 4, max: 8, letter: 'k', pw: 'kkkkkpxk',
    },
    {
        min: 5, max: 7, letter: 'r', pw: 'rfrqfbrrjv',
    },
    {
        min: 3, max: 6, letter: 'h', pw: 'hsvkkw',
    },
    {
        min: 2, max: 5, letter: 'w', pw: 'nwsfw',
    },
    {
        min: 2, max: 5, letter: 'q', pw: 'hqstqgq',
    },
    {
        min: 6, max: 15, letter: 'n', pw: 'mbmtgnvfzjnnjgnn',
    },
    {
        min: 1, max: 2, letter: 'f', pw: 'fffffff',
    },
    {
        min: 1, max: 7, letter: 'v', pw: 'vzvvvvvvxvvrrnzvv',
    },
    {
        min: 3, max: 9, letter: 'h', pw: 'whhhhhhhhhhnhhh',
    },
    {
        min: 11, max: 15, letter: 'g', pw: 'cgxhgsggnggrkgv',
    },
    {
        min: 5, max: 6, letter: 'm', pw: 'mmmmmmm',
    },
    {
        min: 14, max: 19, letter: 'k', pw: 'qkkkcvqjkklhkkkktkk',
    },
    {
        min: 2, max: 8, letter: 'r', pw: 'fcrrqrrgrrrrrrlr',
    },
    {
        min: 1, max: 2, letter: 'l', pw: 'lllvl',
    },
    {
        min: 17, max: 18, letter: 'c', pw: 'vmcbkchcdktrnxccht',
    },
    {
        min: 10, max: 14, letter: 'l', pw: 'klwzklwmllccql',
    },
    {
        min: 4, max: 7, letter: 'g', pw: 'xgfggwg',
    },
    {
        min: 2, max: 4, letter: 's', pw: 'trhz',
    },
    {
        min: 3, max: 5, letter: 'j', pw: 'lzfglwfbsqj',
    },
    {
        min: 4, max: 5, letter: 'p', pw: 'stnprtpzszfc',
    },
    {
        min: 9, max: 13, letter: 'p', pw: 'pppnppppjtsppc',
    },
    {
        min: 6, max: 16, letter: 'r', pw: 'rxrrrrrrrdrbrrlrh',
    },
    {
        min: 10, max: 11, letter: 'c', pw: 'ccccvclccrl',
    },
    {
        min: 8, max: 9, letter: 'l', pw: 'nlglpwlqxl',
    },
    {
        min: 10, max: 11, letter: 'x', pw: 'xxxxxxxgsxx',
    },
    {
        min: 7, max: 8, letter: 'z', pw: 'zzzzszzlzwzzzzzzzz',
    },
    {
        min: 1, max: 5, letter: 'q', pw: 'qqnbc',
    },
    {
        min: 2, max: 3, letter: 'v', pw: 'jvvvv',
    },
    {
        min: 2, max: 6, letter: 'f', pw: 'btdfbcfnk',
    },
    {
        min: 8, max: 10, letter: 'w', pw: 'wlwnbwwblmww',
    },
    {
        min: 3, max: 13, letter: 'v', pw: 'brwmcxvlptbdvchwkjp',
    },
    {
        min: 8, max: 9, letter: 'w', pw: 'gwwwwwwbr',
    },
    {
        min: 2, max: 11, letter: 'k', pw: 'pkhzsvjbhkk',
    },
    {
        min: 6, max: 7, letter: 'g', pw: 'gggggmb',
    },
    {
        min: 6, max: 7, letter: 'g', pw: 'gggggggg',
    },
    {
        min: 7, max: 16, letter: 'q', pw: 'cqxfqzqnqvmkkhjqdr',
    },
    {
        min: 1, max: 13, letter: 'r', pw: 'rrrrrrrrlrrrrrr',
    },
    {
        min: 10, max: 14, letter: 'x', pw: 'xxxxxxxxxqxxxxxxxxxx',
    },
    {
        min: 4, max: 5, letter: 'l', pw: 'llllp',
    },
    {
        min: 1, max: 3, letter: 'c', pw: 'wccc',
    },
    {
        min: 5, max: 11, letter: 'k', pw: 'kkfgkkkkkkkkqhk',
    },
    {
        min: 2, max: 7, letter: 'n', pw: 'lnnjcks',
    },
    {
        min: 12, max: 14, letter: 's', pw: 'sssssssssssssss',
    },
    {
        min: 1, max: 16, letter: 'q', pw: 'qqqqqqqqqqqqqqqzq',
    },
    {
        min: 2, max: 3, letter: 'n', pw: 'nnnn',
    },
    {
        min: 8, max: 20, letter: 'm', pw: 'vrtvfghfmskclmlmbwmm',
    },
    {
        min: 2, max: 4, letter: 'n', pw: 'nnwn',
    },
    {
        min: 12, max: 13, letter: 'd', pw: 'pdftgnmpcwddd',
    },
    {
        min: 5, max: 6, letter: 'b', pw: 'tsrbbb',
    },
    {
        min: 4, max: 7, letter: 'q', pw: 'zrppqcw',
    },
    {
        min: 11, max: 17, letter: 'l', pw: 'llllllllllllllllll',
    },
    {
        min: 1, max: 4, letter: 'b', pw: 'brzbfdgbphrzxtlpgj',
    },
    {
        min: 7, max: 8, letter: 'x', pw: 'xwlxxxxxxl',
    },
    {
        min: 5, max: 6, letter: 'h', pw: 'hhchnm',
    },
    {
        min: 3, max: 4, letter: 'x', pw: 'xxxxx',
    },
    {
        min: 4, max: 5, letter: 'k', pw: 'pkkqjkk',
    },
    {
        min: 4, max: 8, letter: 'k', pw: 'xqkkfwdkmsrr',
    },
    {
        min: 7, max: 8, letter: 'l', pw: 'lllllcsl',
    },
    {
        min: 4, max: 9, letter: 'c', pw: 'ccczcccccccccc',
    },
    {
        min: 8, max: 12, letter: 'j', pw: 'jjjjjjjqjjjjjjjj',
    },
    {
        min: 9, max: 11, letter: 'j', pw: 'vzkhqcjzkwjbpzv',
    },
    {
        min: 11, max: 12, letter: 'r', pw: 'rrrrrrrrrrtxr',
    },
    {
        min: 1, max: 4, letter: 't', pw: 'mttbgtttttt',
    },
    {
        min: 2, max: 12, letter: 'r', pw: 'rrrrrrrzrrrrrr',
    },
    {
        min: 10, max: 11, letter: 'c', pw: 'ccccccccccgcc',
    },
    {
        min: 9, max: 16, letter: 'd', pw: 'bgdctdzjdxqfrbddznnp',
    },
    {
        min: 3, max: 7, letter: 's', pw: 'brsjsdsh',
    },
    {
        min: 3, max: 11, letter: 'j', pw: 'cjwlbhgvcjc',
    },
    {
        min: 13, max: 16, letter: 'j', pw: 'pjfrdprjhmfqjddq',
    },
    {
        min: 9, max: 15, letter: 'n', pw: 'nnnnnnnnnnnnnnnnn',
    },
    {
        min: 14, max: 15, letter: 'b', pw: 'zbbbtbfbbbbbbbl',
    },
    {
        min: 4, max: 14, letter: 'p', pw: 'pppppppppppppjpp',
    },
    {
        min: 3, max: 6, letter: 'j', pw: 'pwbfjs',
    },
    {
        min: 1, max: 11, letter: 'z', pw: 'zzzzzzzzzzjz',
    },
    {
        min: 7, max: 17, letter: 'd', pw: 'gldddpskdbvmdmwgk',
    },
    {
        min: 5, max: 18, letter: 'g', pw: 'gggggggggggnmggggggg',
    },
    {
        min: 6, max: 7, letter: 'g', pw: 'llgggdh',
    },
    {
        min: 4, max: 5, letter: 'j', pw: 'zszjs',
    },
    {
        min: 3, max: 13, letter: 's', pw: 'kwjbvbgxhwsbskjdkbv',
    },
    {
        min: 1, max: 2, letter: 'c', pw: 'kghcc',
    },
    {
        min: 1, max: 8, letter: 'k', pw: 'vtkthkhs',
    },
    {
        min: 6, max: 7, letter: 'n', pw: 'nnnnnnnnn',
    },
    {
        min: 13, max: 14, letter: 's', pw: 'xssssssssssssq',
    },
    {
        min: 3, max: 4, letter: 'h', pw: 'hhxnh',
    },
    {
        min: 8, max: 10, letter: 'g', pw: 'gctrgrcgjg',
    },
    {
        min: 7, max: 9, letter: 'n', pw: 'nnncnnnnnn',
    },
    {
        min: 7, max: 8, letter: 'b', pw: 'bbnpbbbbb',
    },
    {
        min: 6, max: 11, letter: 'x', pw: 'jxqtcxxdxkxcwtxhdv',
    },
    {
        min: 10, max: 11, letter: 'q', pw: 'qqqkqkqqqqzqqq',
    },
    {
        min: 5, max: 6, letter: 'k', pw: 'kkkkkk',
    },
    {
        min: 3, max: 4, letter: 'm', pw: 'lndx',
    },
    {
        min: 14, max: 18, letter: 'l', pw: 'hdzlvpxlqnbklgpqgpz',
    },
    {
        min: 14, max: 18, letter: 'f', pw: 'ffffffffffxfffffff',
    },
    {
        min: 4, max: 9, letter: 'p', pw: 'gprzchppz',
    },
    {
        min: 5, max: 7, letter: 'q', pw: 'qqsljxk',
    },
    {
        min: 7, max: 8, letter: 'q', pw: 'pqqjqnkq',
    },
    {
        min: 3, max: 6, letter: 'v', pw: 'jvmvvvvvvjvf',
    },
    {
        min: 2, max: 10, letter: 'l', pw: 'hllsznczblmxbrmrnj',
    },
    {
        min: 13, max: 14, letter: 'w', pw: 'wwwwwwwwwwwwvc',
    },
    {
        min: 4, max: 8, letter: 'm', pw: 'mnmmmmmgm',
    },
    {
        min: 10, max: 11, letter: 'r', pw: 'rrrrrrwcrlq',
    },
    {
        min: 3, max: 4, letter: 'q', pw: 'qqqq',
    },
    {
        min: 4, max: 9, letter: 's', pw: 'spwsjshpst',
    },
    {
        min: 1, max: 6, letter: 'k', pw: 'kkznkkkkk',
    },
    {
        min: 2, max: 6, letter: 't', pw: 'dlbjpf',
    },
    {
        min: 7, max: 10, letter: 'd', pw: 'qxqbdtddgdvzmdmrp',
    },
    {
        min: 16, max: 18, letter: 'b', pw: 'bbbbbblbbbbbbbbvbs',
    },
    {
        min: 1, max: 5, letter: 'c', pw: 'cwbbccccccb',
    },
    {
        min: 4, max: 11, letter: 'z', pw: 'zrxzszzlzvzzzmdkt',
    },
    {
        min: 17, max: 19, letter: 'b', pw: 'bppptxztffxxqnlpbbb',
    },
    {
        min: 3, max: 9, letter: 'n', pw: 'nnnlncrnnnnn',
    },
];

const part1 = () => {
    let validCount = 0;

    input.forEach(({
        min, max, letter, pw,
    }) => {
        const letterCount = (pw.match(new RegExp(letter, 'g')) || []).length;
        if (letterCount >= min && letterCount <= max) {
            validCount += 1;
        }
    });

    console.log(validCount);
};

part1();

/*
--- Part Two ---
While it appears you validated the passwords correctly, they don't seem to be what the Official Toboggan Corporate Authentication System is expecting.

The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street!
The Official Toboggan Corporate Policy actually works a little differently.

Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on.
(Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter.
Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

Given the same example list from above:

1-3 a: abcde is valid: position 1 contains a and position 3 does not.
1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
How many passwords are valid according to the new interpretation of the policies?
*/

const part2 = () => {
    let validCount = 0;

    input.forEach(({
        min: pos1, max: pos2, letter, pw,
    }) => {
        const pos1Match = pw.substr(pos1 - 1, 1) === letter;
        const pos2Match = pw.substr(pos2 - 1, 1) === letter;

        if ((pos1Match && !pos2Match) || (!pos1Match && pos2Match)) {
            validCount += 1;
        }
    });

    console.log(validCount);
};

part2();
