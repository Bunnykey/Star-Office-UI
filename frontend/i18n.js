(function (global) {
    const DEFAULT_LANG = 'zh-CN';
    const SUPPORTED_LANGS = ['zh-CN', 'en', 'ko'];

    const TRANSLATIONS = {
        'zh-CN': {
            pageTitle: 'Star 的像素办公室',
            loading: {
                initial: '正在加载 Star 的像素办公室...',
                withPercent: '正在加载 Star 的像素办公室... {percent}%'
            },
            memo: {
                title: '— 昨 日 小 记 —',
                loading: '加载中...',
                empty: '暂无昨日日记',
                failed: '加载失败',
                fetchFailedLog: '加载 memo 失败:'
            },
            control: {
                title: 'Star 状态',
                idle: '待命',
                writing: '工作',
                syncing: '同步',
                error: '报警'
            },
            guestPanel: {
                title: '— 访 客 列 表 —',
                loading: '正在加载访客...',
                empty: '暂无访客',
                unnamed: '未命名访客',
                defaultName: '访客',
                subtitleFormat: '{status} · {state}',
                actions: {
                    exchangeSkill: '交换skill',
                    leaveRoom: '离开房间',
                    exchangeSkillDev: '交换 skill 功能开发中'
                },
                alerts: {
                    leaveSuccess: '{name} 已离开房间',
                    leaveSuccessDemo: '{name} 已离开房间（demo）',
                    leaveFailed: '离开失败：{msg}',
                    approveSuccess: '已批准该访客接入',
                    approveFailed: '批准失败：{msg}',
                    rejectSuccess: '已拒绝该访客',
                    rejectFailed: '拒绝失败：{msg}',
                    requestFailed: '请求失败：{error}'
                },
                fetchFailedLog: '拉取访客列表失败:',
                statuses: {
                    approved: '已授权',
                    pending: '待授权',
                    rejected: '已拒绝',
                    offline: '离线'
                }
            },
            states: {
                idle: '待命',
                writing: '整理文档',
                researching: '搜索信息',
                executing: '执行任务',
                syncing: '同步备份',
                error: '出错了'
            },
            stateLabels: {
                idle: '待命',
                writing: '工作',
                researching: '调研',
                executing: '执行',
                syncing: '同步',
                error: '报警'
            },
            stateDetails: {
                idle: '待命',
                writing: '工作中',
                syncing: '同步中',
                error: '报警中'
            },
            bubbleTexts: {
                idle: [
                    '待命中：耳朵竖起来了',
                    '我在这儿，随时可以开工',
                    '先把桌面收拾干净再说',
                    '呼——给大脑放个风',
                    '今天也要优雅地高效',
                    '等待，是为了更准确的一击',
                    '咖啡还热，灵感也还在',
                    '我在后台给你加 Buff',
                    '状态：静心 / 充电',
                    '小猫说：慢一点也没关系'
                ],
                writing: [
                    '进入专注模式：勿扰',
                    '先把关键路径跑通',
                    '我来把复杂变简单',
                    '把 bug 关进笼子里',
                    '写到一半，先保存',
                    '把每一步都做成可回滚',
                    '今天的进度，明天的底气',
                    '先收敛，再发散',
                    '让系统变得更可解释',
                    '稳住，我们能赢'
                ],
                researching: [
                    '我在挖证据链',
                    '让我把信息熬成结论',
                    '找到了：关键在这里',
                    '先把变量控制住',
                    '我在查：它为什么会这样',
                    '把直觉写成验证',
                    '先定位，再优化',
                    '别急，先画因果图'
                ],
                executing: [
                    '执行中：不要眨眼',
                    '把任务切成小块逐个击破',
                    '开始跑 pipeline',
                    '一键推进：走你',
                    '让结果自己说话',
                    '先做最小可行，再做最美版本'
                ],
                syncing: [
                    '同步中：把今天锁进云里',
                    '备份不是仪式，是安全感',
                    '写入中…别断电',
                    '把变更交给时间戳',
                    '云端对齐：咔哒',
                    '同步完成前先别乱动',
                    '把未来的自己从灾难里救出来',
                    '多一份备份，少一份后悔'
                ],
                error: [
                    '警报响了：先别慌',
                    '我闻到 bug 的味道了',
                    '先复现，再谈修复',
                    '把日志给我，我会说人话',
                    '错误不是敌人，是线索',
                    '把影响面圈起来',
                    '先止血，再手术',
                    '我在：马上定位根因',
                    '别怕，这种我见多了',
                    '报警中：让问题自己现形'
                ],
                cat: [
                    '喵~',
                    '咕噜咕噜…',
                    '尾巴摇一摇',
                    '晒太阳最开心',
                    '有人来看我啦',
                    '我是这个办公室的吉祥物',
                    '伸个懒腰',
                    '今天的罐罐准备好了吗',
                    '呼噜呼噜',
                    '这个位置视野最好'
                ]
            },
            demo: {
                writing: '我在工作中',
                idle: '我去休息区躺一下',
                thoughts: {
                    idle: ['我在休息区待命', '先放松一下，等下一步任务', '我在休息充电中'],
                    writing: ['我在工作区处理任务', '正在整理文档与执行中', '工作区专注推进中'],
                    researching: ['我在调研模式，搜集信息', '正在查资料和验证线索', '研究中，稍后同步结论'],
                    executing: ['执行中，正在跑流程', '我在工作区推进任务', '正在把计划落地执行'],
                    syncing: ['同步中，马上更新状态', '正在同步进度到系统', '数据同步中请稍候'],
                    error: ['我在 bug 区排查问题', '检测到异常，正在修复', '报警中，先定位再处理']
                },
                bubbleByState: {
                    idle: '我去休息区躺一下',
                    writing: '我在工作中',
                    researching: '我在调研中',
                    executing: '我在执行任务',
                    syncing: '我在同步状态',
                    error: '出错了！我去报警区'
                },
                welcome: [
                    '欢迎 {name} 来到办公室～',
                    'Hi {name}，一起开工吧',
                    '{name} 已加入，欢迎！'
                ]
            },
            plaqueText: '海辛小龙虾的办公室',
            status: {
                loading: '加载中...',
                format: '[{state}] {detail}',
                unknownDetail: '...',
                connectionFailed: '连接失败，正在重试...'
            },
            ui: {
                coordsShow: '显示坐标',
                coordsHide: '隐藏坐标',
                panMove: '移动视野',
                panLock: '锁定视野',
                langButtonPrefix: '语言'
            },
            misc: {
                unknownError: '未知错误',
                forceBubbleFailedLog: '强制冒泡失败:'
            }
        },
        en: {
            pageTitle: 'Star Pixel Office',
            loading: {
                initial: 'Loading Star Pixel Office...',
                withPercent: 'Loading Star Pixel Office... {percent}%'
            },
            memo: {
                title: '— Yesterday Note —',
                loading: 'Loading...',
                empty: 'No memo for yesterday',
                failed: 'Failed to load',
                fetchFailedLog: 'Failed to load memo:'
            },
            control: {
                title: 'Star Status',
                idle: 'Idle',
                writing: 'Work',
                syncing: 'Sync',
                error: 'Alert'
            },
            guestPanel: {
                title: '— Guest List —',
                loading: 'Loading guests...',
                empty: 'No guests',
                unnamed: 'Unnamed Guest',
                defaultName: 'Guest',
                subtitleFormat: '{status} · {state}',
                actions: {
                    exchangeSkill: 'Swap Skill',
                    leaveRoom: 'Leave Room',
                    exchangeSkillDev: 'Swap skill is under development'
                },
                alerts: {
                    leaveSuccess: '{name} has left the room',
                    leaveSuccessDemo: '{name} has left the room (demo)',
                    leaveFailed: 'Leave failed: {msg}',
                    approveSuccess: 'Guest access approved',
                    approveFailed: 'Approve failed: {msg}',
                    rejectSuccess: 'Guest rejected',
                    rejectFailed: 'Reject failed: {msg}',
                    requestFailed: 'Request failed: {error}'
                },
                fetchFailedLog: 'Failed to fetch guest list:',
                statuses: {
                    approved: 'Approved',
                    pending: 'Pending',
                    rejected: 'Rejected',
                    offline: 'Offline'
                }
            },
            states: {
                idle: 'Idle',
                writing: 'Writing docs',
                researching: 'Researching',
                executing: 'Executing',
                syncing: 'Syncing backup',
                error: 'Error'
            },
            stateLabels: {
                idle: 'Idle',
                writing: 'Work',
                researching: 'Research',
                executing: 'Execute',
                syncing: 'Sync',
                error: 'Alert'
            },
            stateDetails: {
                idle: 'Idle',
                writing: 'Working',
                syncing: 'Syncing',
                error: 'Alerting'
            },
            bubbleTexts: {
                idle: [
                    'Idle mode: ears up',
                    'I am here and ready to start',
                    'Let me tidy the desk first',
                    'Breathing break for the brain',
                    'Staying elegant and efficient today',
                    'Waiting makes the next move precise',
                    'Coffee is warm and ideas are alive',
                    'Buffing you from the background',
                    'Status: calm / charging',
                    'The cat says: take it slow'
                ],
                writing: [
                    'Focus mode: do not disturb',
                    'Running through the critical path first',
                    'I will make complexity simple',
                    'Locking bugs in a cage',
                    'Halfway done, saving first',
                    'Every step should be rollback-safe',
                    'Today progress, tomorrow confidence',
                    'Converge first, then diverge',
                    'Making the system explainable',
                    'Hold steady, we can win'
                ],
                researching: [
                    'Building the evidence chain',
                    'Let me boil info into conclusions',
                    'Found it: the key is here',
                    'Control variables first',
                    'Checking why it behaves this way',
                    'Turning intuition into validation',
                    'Locate first, optimize next',
                    'Hold on, drawing causality first'
                ],
                executing: [
                    'Executing: do not blink',
                    'Split the task and crush chunk by chunk',
                    'Starting the pipeline',
                    'One-click push: go',
                    'Let results speak for themselves',
                    'Build MVP first, then polish'
                ],
                syncing: [
                    'Syncing: locking today into cloud',
                    'Backup is safety, not ritual',
                    'Writing... do not power off',
                    'Changes go with timestamps',
                    'Cloud alignment: click',
                    'Do not touch before sync ends',
                    'Saving future me from disasters',
                    'One more backup, one less regret'
                ],
                error: [
                    'Alarm on: stay calm first',
                    'I can smell a bug',
                    'Reproduce first, then fix',
                    'Give me logs and I will decode',
                    'Errors are clues, not enemies',
                    'Draw a boundary of impact',
                    'Stop bleeding, then surgery',
                    'I am locating the root cause',
                    'No worries, seen this before',
                    'Alert mode: force the issue to appear'
                ],
                cat: [
                    'Meow~',
                    'Purr purr...',
                    'Tail swish swish',
                    'Sunbathing is the best',
                    'Someone came to see me',
                    'I am this office mascot',
                    'Big stretch',
                    'Is canned food ready today',
                    'Rumble rumble',
                    'Best view spot right here'
                ]
            },
            demo: {
                writing: 'I am working',
                idle: 'I am heading to the break area',
                thoughts: {
                    idle: ['On standby in the break area', 'Taking a short break for next task', 'Recharging in the break area'],
                    writing: ['Working in the work area', 'Organizing docs and executing tasks', 'Focused progress in work area'],
                    researching: ['Research mode: collecting info', 'Looking up data and validating clues', 'Researching, will sync later'],
                    executing: ['Executing workflow now', 'Pushing tasks in the work area', 'Turning plans into execution'],
                    syncing: ['Syncing now, status updates soon', 'Syncing progress to system', 'Data syncing, please wait'],
                    error: ['Debugging in bug zone', 'Exception detected, fixing now', 'Alerting, locating before handling']
                },
                bubbleByState: {
                    idle: 'I am heading to the break area',
                    writing: 'I am working',
                    researching: 'I am researching',
                    executing: 'I am executing tasks',
                    syncing: 'I am syncing status',
                    error: 'Error! Heading to alert zone'
                },
                welcome: [
                    'Welcome {name} to the office',
                    'Hi {name}, let us get to work',
                    '{name} joined, welcome'
                ]
            },
            plaqueText: 'Haixin Lobster Office',
            status: {
                loading: 'Loading...',
                format: '[{state}] {detail}',
                unknownDetail: '...',
                connectionFailed: 'Connection failed, retrying...'
            },
            ui: {
                coordsShow: 'Show Coords',
                coordsHide: 'Hide Coords',
                panMove: 'Pan View',
                panLock: 'Lock View',
                langButtonPrefix: 'Lang'
            },
            misc: {
                unknownError: 'Unknown error',
                forceBubbleFailedLog: 'Forced bubble failed:'
            }
        },
        ko: {
            pageTitle: 'Star 픽셀 오피스',
            loading: {
                initial: 'Star 픽셀 오피스를 불러오는 중...',
                withPercent: 'Star 픽셀 오피스를 불러오는 중... {percent}%'
            },
            memo: {
                title: '— 어제의 메모 —',
                loading: '불러오는 중...',
                empty: '어제 메모가 없습니다',
                failed: '불러오기 실패',
                fetchFailedLog: '메모 불러오기 실패:'
            },
            control: {
                title: 'Star 상태',
                idle: '대기',
                writing: '작업',
                syncing: '동기화',
                error: '경보'
            },
            guestPanel: {
                title: '— 방문자 목록 —',
                loading: '방문자 불러오는 중...',
                empty: '방문자가 없습니다',
                unnamed: '이름 없는 방문자',
                defaultName: '방문자',
                subtitleFormat: '{status} · {state}',
                actions: {
                    exchangeSkill: '스킬 교환',
                    leaveRoom: '방 나가기',
                    exchangeSkillDev: '스킬 교환 기능은 개발 중입니다'
                },
                alerts: {
                    leaveSuccess: '{name} 님이 방을 나갔습니다',
                    leaveSuccessDemo: '{name} 님이 방을 나갔습니다 (demo)',
                    leaveFailed: '나가기 실패: {msg}',
                    approveSuccess: '방문자 접속을 승인했습니다',
                    approveFailed: '승인 실패: {msg}',
                    rejectSuccess: '방문자를 거절했습니다',
                    rejectFailed: '거절 실패: {msg}',
                    requestFailed: '요청 실패: {error}'
                },
                fetchFailedLog: '방문자 목록 불러오기 실패:',
                statuses: {
                    approved: '승인됨',
                    pending: '대기 중',
                    rejected: '거절됨',
                    offline: '오프라인'
                }
            },
            states: {
                idle: '대기',
                writing: '문서 정리',
                researching: '정보 조사',
                executing: '작업 실행',
                syncing: '백업 동기화',
                error: '오류'
            },
            stateLabels: {
                idle: '대기',
                writing: '작업',
                researching: '조사',
                executing: '실행',
                syncing: '동기화',
                error: '경보'
            },
            stateDetails: {
                idle: '대기',
                writing: '작업 중',
                syncing: '동기화 중',
                error: '경보 중'
            },
            bubbleTexts: {
                idle: [
                    '대기 중: 귀를 세웠어요',
                    '여기 있어요, 바로 시작할 수 있어요',
                    '먼저 책상을 정리할게요',
                    '뇌를 잠깐 쉬게 하는 중',
                    '오늘도 우아하게 효율적으로',
                    '기다림은 더 정확한 한 수를 위해',
                    '커피도 따뜻하고 아이디어도 살아있어요',
                    '백그라운드에서 버프 주는 중',
                    '상태: 차분함 / 충전',
                    '고양이 왈: 천천히 가도 괜찮아'
                ],
                writing: [
                    '집중 모드: 방해 금지',
                    '먼저 핵심 경로를 통과할게요',
                    '복잡함을 단순하게 만들게요',
                    '버그를 우리에 가둬요',
                    '반쯤 왔으니 먼저 저장',
                    '모든 단계는 롤백 가능해야 해요',
                    '오늘의 진전이 내일의 자신감',
                    '수렴 후 확산',
                    '시스템을 더 설명 가능하게',
                    '침착하게, 이길 수 있어요'
                ],
                researching: [
                    '증거 체인을 찾는 중',
                    '정보를 결론으로 끓여볼게요',
                    '찾았어요: 핵심은 여기예요',
                    '먼저 변수를 통제해요',
                    '왜 이렇게 동작하는지 확인 중',
                    '직감을 검증으로 바꿔요',
                    '먼저 위치 파악, 그다음 최적화',
                    '잠깐만요, 인과도를 먼저 그릴게요'
                ],
                executing: [
                    '실행 중: 눈 깜빡 금지',
                    '작업을 쪼개서 하나씩 해결',
                    '파이프라인 시작',
                    '원클릭 전진: 출발',
                    '결과가 말하게 두세요',
                    '먼저 MVP, 그다음 완성도'
                ],
                syncing: [
                    '동기화 중: 오늘을 클라우드에 잠금',
                    '백업은 의식이 아니라 안전감',
                    '기록 중... 전원 끄지 마세요',
                    '변경사항은 타임스탬프로',
                    '클라우드 정렬: 딸깍',
                    '동기화 완료 전엔 건드리지 마세요',
                    '미래의 나를 재난에서 구하는 중',
                    '백업 하나 더, 후회 하나 덜'
                ],
                error: [
                    '경보 발생: 우선 침착하게',
                    '버그 냄새가 나요',
                    '재현부터 하고 수정 논의',
                    '로그를 주세요, 해석해드릴게요',
                    '오류는 적이 아니라 단서예요',
                    '영향 범위를 먼저 표시',
                    '먼저 출혈을 막고 수술',
                    '지금 근본 원인을 찾는 중',
                    '걱정 마세요, 이런 건 익숙해요',
                    '경보 중: 문제를 스스로 드러내게'
                ],
                cat: [
                    '야옹~',
                    '그르릉...',
                    '꼬리 살랑살랑',
                    '햇볕 쬐는 게 최고',
                    '누가 나 보러 왔네',
                    '나는 이 사무실의 마스코트',
                    '쭉 기지개',
                    '오늘 간식 준비됐나요',
                    '고로롱 고로롱',
                    '여기가 전망 최고'
                ]
            },
            demo: {
                writing: '저는 작업 중이에요',
                idle: '휴식 구역으로 갈게요',
                thoughts: {
                    idle: ['휴식 구역에서 대기 중', '다음 작업 전 잠깐 휴식', '휴식 구역에서 충전 중'],
                    writing: ['작업 구역에서 일하는 중', '문서를 정리하고 실행 중', '작업 구역에서 집중 진행 중'],
                    researching: ['조사 모드로 정보 수집 중', '자료를 찾고 단서를 검증 중', '조사 중, 곧 결과를 공유할게요'],
                    executing: ['실행 중, 흐름을 돌리고 있어요', '작업 구역에서 진행 중', '계획을 실행으로 옮기는 중'],
                    syncing: ['동기화 중, 곧 상태를 업데이트', '진행 상황을 시스템에 동기화 중', '데이터 동기화 중, 잠시만요'],
                    error: ['버그 구역에서 문제 점검 중', '예외 감지, 수정 중', '경보 중, 먼저 원인 파악']
                },
                bubbleByState: {
                    idle: '휴식 구역으로 갈게요',
                    writing: '저는 작업 중이에요',
                    researching: '저는 조사 중이에요',
                    executing: '작업을 실행 중이에요',
                    syncing: '상태를 동기화 중이에요',
                    error: '오류 발생! 경보 구역으로 이동'
                },
                welcome: [
                    '{name} 님, 오피스에 오신 걸 환영해요',
                    '안녕하세요 {name}, 함께 시작해요',
                    '{name} 님이 합류했습니다, 환영해요'
                ]
            },
            plaqueText: '해신 가재의 사무실',
            status: {
                loading: '불러오는 중...',
                format: '[{state}] {detail}',
                unknownDetail: '...',
                connectionFailed: '연결 실패, 재시도 중...'
            },
            ui: {
                coordsShow: '좌표 보기',
                coordsHide: '좌표 숨기기',
                panMove: '시야 이동',
                panLock: '시야 고정',
                langButtonPrefix: '언어'
            },
            misc: {
                unknownError: '알 수 없는 오류',
                forceBubbleFailedLog: '강제 버블 실패:'
            }
        }
    };

    function normalizeLang(input) {
        const value = String(input || '').toLowerCase();
        if (!value) return DEFAULT_LANG;
        if (value.startsWith('zh')) return 'zh-CN';
        if (value.startsWith('en')) return 'en';
        if (value.startsWith('ko')) return 'ko';
        return DEFAULT_LANG;
    }

    function detectLanguage() {
        const browserLangs = Array.isArray(navigator.languages) && navigator.languages.length > 0
            ? navigator.languages
            : [navigator.language || navigator.userLanguage || ''];
        for (const lang of browserLangs) {
            const normalized = normalizeLang(lang);
            if (SUPPORTED_LANGS.includes(normalized)) return normalized;
        }
        return DEFAULT_LANG;
    }

    function getByPath(obj, path) {
        return String(path || '').split('.').reduce((acc, key) => (acc && Object.prototype.hasOwnProperty.call(acc, key) ? acc[key] : undefined), obj);
    }

    function clone(value) {
        if (Array.isArray(value)) return value.map(clone);
        if (value && typeof value === 'object') {
            const out = {};
            Object.keys(value).forEach((k) => {
                out[k] = clone(value[k]);
            });
            return out;
        }
        return value;
    }

    function interpolate(template, params) {
        if (typeof template !== 'string') return template;
        return template.replace(/\{(\w+)\}/g, (_, key) => {
            return Object.prototype.hasOwnProperty.call(params, key) ? String(params[key]) : `{${key}}`;
        });
    }

    function getStoredLanguage() {
        try {
            return localStorage.getItem('star-office-ui-lang') || '';
        } catch (_) {
            return '';
        }
    }

    function setStoredLanguage(lang) {
        try {
            localStorage.setItem('star-office-ui-lang', lang);
        } catch (_) {
            // ignore storage errors
        }
    }

    let currentLang = normalizeLang(getStoredLanguage() || detectLanguage());

    function t(path, params) {
        const selected = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANG];
        const fallback = TRANSLATIONS[DEFAULT_LANG];
        const raw = getByPath(selected, path);
        const fallbackRaw = getByPath(fallback, path);
        const value = raw === undefined ? fallbackRaw : raw;
        if (value === undefined) return path;
        if (typeof value === 'string') {
            return interpolate(value, params || {});
        }
        return value;
    }

    function tObj(path) {
        return clone(t(path));
    }

    function setLanguage(lang) {
        currentLang = normalizeLang(lang);
        setStoredLanguage(currentLang);
        if (document && document.documentElement) {
            document.documentElement.lang = currentLang;
        }
        return currentLang;
    }

    function getLanguage() {
        return currentLang;
    }

    function cycleLanguage() {
        const idx = SUPPORTED_LANGS.indexOf(currentLang);
        const next = SUPPORTED_LANGS[(idx + 1) % SUPPORTED_LANGS.length];
        return setLanguage(next);
    }

    setLanguage(currentLang);

    global.StarOfficeI18n = {
        t,
        tObj,
        setLanguage,
        getLanguage,
        cycleLanguage,
        detectLanguage,
        supportedLanguages: SUPPORTED_LANGS.slice()
    };
})(window);
