import type { ReactNode } from "react";
import { ExpectedVisitTime } from "./ExpectedVisitTime";
import { ScrollEffects } from "./ScrollEffects";
import { WorkshopSlider } from "./WorkshopSlider";

const studioAddress = "北京市朝阳区高碑店地区东方金叶文创园 A5";
const studioMapUrl = `https://uri.amap.com/search?keyword=${encodeURIComponent(studioAddress)}&city=北京&src=guardian-art`;

const navLinks = [
  { href: "#about", label: "工作室" },
  { href: "#services", label: "业务" },
  { href: "#workshops", label: "工作坊" },
  { href: "#portfolio", label: "作品集/升学" },
  { href: "#team", label: "师资" },
  { href: "#venue", label: "空间" },
  { href: "#contact", label: "联系" },
];

const painPoints = [
  "想把脑海中的故事装进影像，却缺一个陪你打磨细节的空间。",
  "想了解艺术创作的台前幕后，却没有找到合适的接触法门。",
  "想在艺术交叉中找到突破点，却苦于没有系统学习跨界艺术的机会。",
  "想靠作品集敲开理想学府的大门，却纠结怎样让它独一无二。",
];

const studioMetrics = [
  { value: "3", label: "大核心业务" },
  { value: "5", label: "类主题工作坊" },
  { value: "4", label: "间专业教室" },
  { value: "150㎡", label: "影视级棚拍场地" },
];

const serviceTickets = [
  {
    eyebrow: "01 / Art Workshop",
    title: "艺术工作坊",
    body: "5 大主题工作坊与艺术沙龙，从肢体、戏剧、影像到表达、疗愈，帮你在体验里找到自己的艺术语言。",
    image: "/assets/service-art-workshop-ai.png",
    alt: "抽象拼贴风格的艺术工作坊服务插画",
    className: "bg-[var(--blue)] text-[var(--ink)]",
  },
  {
    eyebrow: "02 / Portfolio Production",
    title: "作品集制作",
    body: "面向艺术院校申请、保研冲刺与职业履历积累，从选题、素材、影像到最终呈现，陪你从 0 到 1。",
    image: "/assets/service-portfolio-ai.png",
    alt: "抽象拼贴风格的作品集制作服务插画",
    className: "bg-[var(--cyan)] text-[var(--ink)]",
  },
  {
    eyebrow: "03 / Postgraduate Study",
    title: "考研升学研习",
    body: "聚焦中国艺术研究院、北京舞蹈学院、北京大学艺术学院、中央戏剧学院等方向，直系师哥师姐针对性辅导。",
    image: "/assets/service-postgrad-ai.png",
    alt: "抽象拼贴风格的考研升学研习服务插画",
    className: "bg-[var(--pink)] text-[var(--ink)]",
  },
];

const workshopCards = [
  {
    number: "01",
    title: "舞蹈影像工作坊",
    tagline: "用镜头写诗",
    body:
      "舞台不止剧场的几十平米。你将学习创意策划、肢体编排、视听语言、后期剪辑与制片管理的全链路创作流程，让身体在画面中长出新的生命力。",
    audience: "斜杠跨媒介创作者、舞者、影像从业者、艺术爱好者，以及有作品集制作需求的你。",
    image: "/assets/workshop-dance.png",
    alt: "抽象拼贴风格的舞蹈影像工作坊插画",
    color: "bg-[var(--blue)]",
  },
  {
    number: "02",
    title: "艺术治疗工作坊",
    tagline: "从头到脚的心灵奇旅",
    body:
      "身体是最诚实的情绪出口。在艺术的接受与创作中释放压力，接触以前沿舞动治疗、戏剧治疗为主的表达性艺术疗愈课程，学会和自己温柔对话。",
    audience: "对艺术、疗愈、心理学保持好奇即可，无需专业基础，适合青少年与成人。",
    image: "/assets/workshop-therapy.png",
    alt: "抽象拼贴风格的艺术治疗工作坊插画",
    color: "bg-[var(--pink)]",
  },
  {
    number: "03",
    title: "戏剧创意工作坊",
    tagline: "把脑洞变成现场",
    body:
      "没有固定剧本，只有你的故事。从解放天性到即兴表演，从人物观察到角色塑造，从舞台调度到装置运用，一群人把脑洞变成可触摸的戏剧现场。",
    audience: "热爱舞台、渴望进阶的戏剧人、跨界艺术人，以及全年龄段戏剧爱好者。",
    image: "/assets/workshop-theatre.png",
    alt: "抽象拼贴风格的戏剧创意工作坊插画",
    color: "bg-[var(--yellow)]",
  },
  {
    number: "04",
    title: "现代舞工作坊",
    tagline: "重新认识身体",
    body:
      "打破固有标准，解放舞蹈思维。你将接触不同的创作技法与形式理念，跳你想跳的，玩你要玩的，而不止于那些应该怎样的答案。",
    audience: "有态度的现代舞人，以及有一定舞蹈基础和肢体能力的爱好者。",
    image: "/assets/workshop-modern-ai.png",
    alt: "抽象拼贴风格的现代舞工作坊插画",
    color: "bg-[#9ed9c7]",
  },
  {
    number: "05",
    title: "音乐剧工作坊",
    tagline: "唱跳演的全能挑战",
    body:
      "声乐、台词、表演、舞蹈缺一不可。我们会带你进行全方位训练，从剧本理解到舞台张力，在经典作品里打磨，在原创段落中绽放。",
    audience: "渴望进阶的音乐剧人，以及热爱音乐剧的青少年与成人。",
    image: "/assets/workshop-musical-ai.png",
    alt: "抽象拼贴风格的音乐剧工作坊插画",
    color: "bg-[var(--coral)]",
  },
];

const portfolioSteps = [
  {
    label: "Portfolio / 01",
    title: "定方向",
    body: "拆目标、定选题，先把作品集的核心命题立住。",
  },
  {
    label: "Portfolio / 02",
    title: "搭流程",
    body: "从构思到素材、拍摄、片段或影像成片，导师持续推进。",
  },
  {
    label: "Portfolio / 03",
    title: "磨细节",
    body: "把动作张力、页面节奏和叙事逻辑逐页校准。",
  },
];

const studyItems = [
  {
    title: "拆方向",
    body: "围绕舞蹈、音乐剧、戏剧与影视等专业，拆解院校要求、考试节奏和表达侧重点。",
  },
  {
    title: "定节奏",
    body: "报考专业直系师哥、师姐针对性辅导，把迷茫备考转成精准发力。",
  },
  {
    title: "落表达",
    body: "从资料梳理、作品准备到面试表达，陪你奋斗到研途结束的最后一刻。",
  },
];

const teacherHighlights = [
  {
    title: "舞蹈影像",
    body: "深耕镜头、身体与叙事，让作品进入更成熟的影像表达。",
  },
  {
    title: "艺术疗愈",
    body: "以舞动治疗与表达性艺术，打开向内探索的身心通道。",
  },
  {
    title: "升学规划",
    body: "从艺考、考研到保研，拆清艺术院校真实筛选逻辑。",
  },
  {
    title: "戏剧表演",
    body: "把体验者带到敢表达、敢上台、敢被看见的现场状态。",
  },
  {
    title: "创意制片",
    body: "为灵感找到能执行、能落地、能被完成的制作路径。",
  },
  {
    title: "作品集申请",
    body: "理解招生官会停留的作品瞬间，帮你校准表达重心。",
  },
];

const featuredTeachers = [
  {
    number: "01",
    image: "/assets/docx-media/image1.png",
    alt: "林逸婧照片",
    field: "Screen Dance / Musical",
    name: "林逸婧",
    title: "工作室主理人、舞蹈影像板块负责人",
    role: "音乐剧演员 / 编舞 / 舞蹈影像创作者",
    bio:
      "本科毕业于北京舞蹈学院舞蹈学系，中国艺术研究院戏剧影视表演（形体）MFA，北京舞蹈家协会会员，北京市优秀毕业生、北京市优秀论文（设计）。导演的多部舞蹈影像荣获国内外舞蹈影像节、电影节、广告赛事大奖。",
    works: [
      "舞蹈影像《盒和合》《回我》《蚂蚁》《丹漆》",
      "优衣库舞蹈广告《遇见传奇》、奥美生活舞蹈广告《守护你的美丽时刻》",
      "圆明园 MV《我曾又见圆明春风过》、颐和园 MV《颐生梦园》",
      "国家艺术基金音乐剧《愚公移山》、音乐剧《大钊先生》《凝望云冈》",
    ],
  },
  {
    number: "02",
    image: "/assets/docx-media/image2.png",
    alt: "单钶炜照片",
    field: "Drama Performance",
    name: "单钶炜",
    title: "戏剧影视表演板块负责人",
    role: "中央戏剧学院实验剧团演员 / 北京拾禾剧团主理人 / 拾人表演工作室创始人",
    bio:
      "本科毕业于中央戏剧学院话剧影视表演专业，中央戏剧学院优秀毕业生、优秀毕业论文作者。曾任杂志《课堂内外》签约专栏作者、美育公益项目表演艺术版块内容负责人，曾获国际青少年微电影大赛最佳男演员奖。",
    works: [
      "话剧《无事生非》《海鸥》《蝴蝶是自由的》",
      "话剧《灵魂拒葬》《回廊亭杀人事件》《两个人》",
      "电影《假爱之名》《雾中来的人 2037》《战友》",
      "论文《浅谈“心象”学说在表演过程中的运用》",
    ],
  },
  {
    number: "03",
    image: "/assets/docx-media/image3.png",
    alt: "陈诗文照片",
    field: "Art Therapy",
    name: "陈诗文",
    title: "艺术疗愈板块负责人",
    role: "舞蹈科学训练讲师 / 德国舞动治疗师 BTD（受训中）",
    bio:
      "本硕毕业于北京舞蹈学院舞蹈学系（舞蹈科学方向），长期专注舞蹈教育、舞蹈治疗领域。以专业理论为基础，融合舞蹈解剖学、生理学、心理学等知识，构建独特教学与治疗逻辑。",
    works: [
      "深度参与中老年健康舞蹈教育相关科研项目",
      "曾在全国舞蹈科学大会、高校艺术治疗研讨会等平台发言",
      "在高校、中小学及康复、医疗场景开展舞动干预与艺术疗愈项目",
      "发表《舞蹈干预情绪研究综述》等多篇研究论文",
    ],
  },
  {
    number: "04",
    image: "/assets/faculty/faculty-04.jpg",
    alt: "孟祥权照片",
    field: "Musical",
    name: "孟祥权",
    title: "音乐剧版块负责人",
    role: "音乐剧导演 / 编舞 / 演员",
    bio:
      "本科毕业于北京舞蹈学院音乐剧系，北京大学艺术学院音乐剧 MFA（第 1 名），北京市优秀毕业生。第十届文荣奖导演组成员，第八、九届北京大学音乐剧学院奖执行导演、导演助理、舞蹈编导。",
    works: [
      "第八、九届音乐剧学院奖",
      "国家艺术基金音乐剧《愚公移山》、音乐剧《大钊先生》",
      "音乐剧《摩登明星梦》、情景史诗文艺演出《伟大征程》",
      "论文《创作边界与文本重构：跨媒介视域下电影的音乐剧改编》",
    ],
  },
  {
    number: "05",
    image: "/assets/faculty/faculty-05.jpg",
    alt: "黄紫燕照片",
    field: "Choreography",
    name: "黄紫燕",
    title: "舞蹈编创版块负责人",
    role: "舞者 / 演员 / 编导",
    bio:
      "本科毕业于北京舞蹈学院编导系，曾获韩国国际现代舞比赛 KICDC 成年组铜奖、意大利切莱国际舞蹈比赛 Top15、意大利国际舞蹈人才大赛 Top20，并多次入围罗马国际舞蹈大赛等国际赛事。",
    works: [
      "音乐舞蹈史诗《奋斗吧 中华儿女》、情景史诗文艺演出《伟大征程》",
      "舞蹈诗《那些故事》、荷花奖入围剧目《娘想你们啊》",
      "舞蹈剧场《瑞鹤图》《秋天》《花园》",
      "舞蹈影像《回我》《Turn out》《Once Again》",
    ],
  },
  {
    number: "06",
    image: "/assets/faculty/faculty-06.jpg",
    alt: "邝智恒照片",
    field: "Contemporary Dance",
    name: "邝智恒",
    title: "现代舞版块负责人",
    role: "舞者 / 演员 / 编导",
    bio:
      "本科毕业于北京舞蹈学院现代舞系，北京雷动天下现代舞团舞者。合作编舞家包括曹诚渊、阿迪亚、刘斌、吴觅等，2022 年北京冬奥会开幕式《立春》编导组成员。",
    works: [
      "编舞作品《皮》、国家艺术基金现代舞作品《呐喊》",
      "音乐舞蹈史诗《奋斗吧 中华儿女》、北京艺术基金舞剧《京宴》",
      "舞蹈诗《向前 向前》、任冬生工作坊作品《界》",
      "舞蹈影像《假如》《PAPER》《嘿！哥们》《IN MY DREAM》",
    ],
  },
  {
    number: "07",
    image: "/assets/faculty/faculty-07.jpg",
    alt: "丁戎融照片",
    field: "Popular Dance",
    name: "丁戎融",
    title: "流行舞版块负责人",
    role: "舞者 / 流行舞&国标舞编舞 / 舞蹈博主",
    bio:
      "本科毕业于北京舞蹈学院舞蹈学系，北京舞蹈学院外国舞表演研究（国标舞方向）与奥克兰大学舞蹈教育方向双硕士。舞蹈风暴青少年组全国总决赛评委，全网粉丝 60w+。",
    works: [
      "第 13 届桃李杯街舞获奖作品《秦兵舞踊》",
      "情景史诗文艺演出《伟大征程》、四川艺术基金项目《点上舞》",
      "单依纯《Ohlala》MV 编舞、艾热《时代感》MV 编舞",
      "舞蹈影像《影舞相生》《盒与合》《Ctrl Alt C》《炭烧电子人》",
    ],
  },
  {
    number: "08",
    image: "/assets/faculty/faculty-08.jpg",
    alt: "邓懿文照片",
    field: "Portfolio",
    name: "邓懿文",
    title: "作品集版块负责人",
    role: "舞评人 / 舞蹈理论研究者",
    bio:
      "本科毕业于北京舞蹈学院舞蹈学系（舞蹈史论方向），纽约大学表演研究与舞蹈教育双硕士。美国舞蹈学协会、国际舞蹈委员会、美国舞蹈教育协会成员，主要研究美国后现代舞、中国现当代舞与舞蹈跨文化传播。",
    works: [
      "《探析后现代舞中行动绘画现象》入选 2024 美国舞蹈学会会议",
      "《冷战中的亚洲舞蹈交流》入选 2025 国际表演研究协会会议",
      "纽约皇后大学《表演和媒体研究》暑期项目学术助教",
      "创作舞蹈影像作品多次入围国内外舞蹈影像节",
    ],
  },
  {
    number: "09",
    image: "/assets/faculty/faculty-09.jpg",
    alt: "刘湲清照片",
    field: "Creative Production",
    name: "刘湲清",
    title: "创意制片版块负责人",
    role: "戏剧制作人 / 影像制片 / 导演 / 舞台监督",
    bio:
      "本硕毕业于北京舞蹈学院艺术传播系，曾于中国台湾中国文化大学戏剧系交换，制作参与多部大型舞台作品、小剧场作品与舞蹈影像作品，具备院团制作统筹经验。",
    works: [
      "音乐戏剧《不在梅边在柳边》、老舍喜剧《西望长安》",
      "肢体戏剧《俑立千年》、音乐剧《冬城女人》",
      "跨媒介戏剧《犀牛》、多媒体戏剧《艺术》、古典舞剧《肆序》",
      "舞蹈影像《我的答案》《抖肩舞》（北舞版）、短片《直行左转》",
    ],
  },
];

const venueItems = [
  "4 间专业教室：立方人舞蹈室、表导演教室、导演工坊、隔音琴房。",
  "1 个专业影棚：150 平米影视级棚拍场地。",
  "1 个共享戏剧空间：开放观影厅、可移动座椅、灵活布景区。",
  "1 个专业化妆室，满足拍摄、演出、形象照与作品录制前准备。",
  "24h 健身房、园区食堂、阳光房休息区与 2 个开放式休息区，保证体能、补给和灵感碰撞。",
];

const venueImages = [
  { src: "/assets/docx-media/image10.jpeg", alt: "专业影棚白色无影墙", label: "影视级棚拍场地" },
  { src: "/assets/docx-media/image4.png", alt: "黑箱戏剧空间舞台灯光", label: "共享戏剧空间" },
  { src: "/assets/docx-media/image7.jpeg", alt: "导演工坊教室", label: "导演工坊" },
  { src: "/assets/docx-media/image9.png", alt: "隔音琴房与钢琴", label: "隔音琴房" },
  { src: "/assets/docx-media/image17.png", alt: "专业化妆室", label: "专业化妆室" },
  { src: "/assets/docx-media/image18.png", alt: "体能训练空间", label: "体能续航站" },
  { src: "/assets/docx-media/image25.png", alt: "开放休息区", label: "开放休息区" },
  { src: "/assets/docx-media/image13.png", alt: "棚拍器材与布景", label: "布景与器材" },
];

const venueSpaces = [
  {
    number: "01",
    title: "立方人舞蹈室",
    body: "干净通透的专业教室，适合身体训练、现代舞工作坊与作品排练。",
    image: "/assets/docx-media/image6.jpeg",
    alt: "立方人舞蹈室空间",
  },
  {
    number: "02",
    title: "表导演教室",
    body: "可讨论、可围读、可即兴排练，适合表演训练、文本工作和小组创作。",
    image: "/assets/docx-media/image14.jpeg",
    alt: "表导演教室座椅空间",
  },
  {
    number: "03",
    title: "导演工坊",
    body: "为创意策划、影像方案、作品集方案和复盘讨论提供稳定的工作台。",
    image: "/assets/docx-media/image7.jpeg",
    alt: "导演工坊教室",
  },
  {
    number: "04",
    title: "隔音琴房",
    body: "服务音乐剧训练、声乐排练和声音表达，让唱、跳、演能被完整打磨。",
    image: "/assets/docx-media/image9.png",
    alt: "隔音琴房与钢琴",
  },
  {
    number: "05",
    title: "150㎡ 专业影棚",
    body: "影视级棚拍场地与器材支持，适合作品集录制、舞蹈影像和形象照拍摄。",
    image: "/assets/docx-media/image10.jpeg",
    alt: "专业影棚白色无影墙",
  },
  {
    number: "06",
    title: "共享戏剧空间",
    body: "开放观影厅、可移动座椅和灵活布景区，把想法快速带到现场。",
    image: "/assets/docx-media/image4.png",
    alt: "共享戏剧空间舞台灯光",
  },
  {
    number: "07",
    title: "专业化妆室",
    body: "满足拍摄、演出、形象照和作品录制前的妆发准备。",
    image: "/assets/docx-media/image17.png",
    alt: "专业化妆室",
  },
  {
    number: "08",
    title: "休息与补给",
    body: "24h 健身房、园区食堂、阳光房和开放休息区，给体能和灵感都留出余地。",
    image: "/assets/docx-media/image25.png",
    alt: "开放休息区",
  },
];

const benefits = [
  {
    label: "01 / 体验课",
    title: "任意工作坊体验课一节",
    body: "添加官方客服微信即可领取，实名制兑换，无时间限制。",
  },
  {
    label: "02 / 报名礼",
    title: "见组照或形象照一组",
    body: "任意报名一期工作坊即可领取，妆造可按自己的表达方向准备。",
  },
  {
    label: "03 / 交流群",
    title: "发送“进群”加入艺术沙龙",
    body: "和舞蹈、戏剧、电影相关创作者与制作人交流分享。",
  },
];

const contactTakeaways = [
  { label: "01", title: "一组优质的形象照拍摄", image: "/assets/takeaway-photo-ai.png" },
  { label: "02", title: "一套完整的面试作品集录制", image: "/assets/takeaway-portfolio-ai.png" },
  { label: "03", title: "一个不错的创意 idea", image: "/assets/takeaway-idea-ai.png" },
  { label: "04", title: "一个全新的你自己", image: "/assets/takeaway-self-ai.png" },
];

const sectionClass =
  "scroll-mt-[calc(var(--nav-h)+18px)] px-[clamp(1rem,4vw,4rem)] py-[clamp(4rem,8vw,7rem)]";
const wrapClass = "mx-auto w-[min(1180px,100%)]";
const wideWrapClass = "mx-auto w-[min(1480px,100%)]";

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-display m-0 mb-2 text-[.78rem] uppercase tracking-[.08em] text-[var(--coral)] ${className}`}>
      {children}
    </p>
  );
}

function HighlightedWork({ text }: { text: string }) {
  const parts = text.split(/(《[^》]+》|KICDC|Top\d+|MFA|BTD|60w\+|MV)/g);
  const hasHighlight = parts.some((part) => /^(《[^》]+》|KICDC|Top\d+|MFA|BTD|60w\+|MV)$/.test(part));

  if (!hasHighlight) {
    return <strong className="font-black text-[rgba(31,29,45,.96)]">{text}</strong>;
  }

  return (
    <>
      {parts.map((part, index) =>
        /^(《[^》]+》|KICDC|Top\d+|MFA|BTD|60w\+|MV)$/.test(part) ? (
          <strong key={`${part}-${index}`} className="font-black text-[rgba(31,29,45,.96)]">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function HighlightedBio({ text }: { text: string }) {
  const keywords =
    "北京舞蹈学院|中国艺术研究院|中央戏剧学院|北京大学艺术学院|北京大学|纽约大学|奥克兰大学|中国文化大学|北京雷动天下现代舞团|北京舞蹈家协会|美国舞蹈学协会|国际舞蹈委员会|美国舞蹈教育协会|MFA|BTD|双硕士|本科毕业|本硕毕业|优秀毕业生|优秀论文|第 1 名|第十届文荣奖|第八、九届北京大学音乐剧学院奖|KICDC|Top15|Top20|2022 年北京冬奥会|舞蹈风暴青少年组全国总决赛评委|全网粉丝 60w\\+|国际青少年微电影大赛最佳男演员奖|舞蹈教育|舞蹈治疗|舞蹈科学|戏剧影视表演|国标舞方向|后现代舞|跨文化传播|院团制作统筹经验|大型舞台作品|小剧场作品|舞蹈影像作品|院团制作";
  const parts = text.split(new RegExp(`(${keywords})`, "g"));
  const highlightPattern = new RegExp(`^(${keywords})$`);

  return (
    <>
      {parts.map((part, index) =>
        highlightPattern.test(part) ? (
          <strong key={`${part}-${index}`} className="font-black text-[var(--blue)]">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`m-0 text-[clamp(2.1rem,3.35vw,3.8rem)] leading-[1.08] tracking-[0] [text-wrap:balance] ${className}`}>
      {children}
    </h2>
  );
}

function ActHeader({
  eyebrow,
  title,
  body,
  dark = true,
}: {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="reveal mb-[clamp(2.4rem,5.2vw,4.6rem)] max-w-[1480px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle className={dark ? "max-w-[1460px] text-[var(--white)]" : "max-w-[1460px] text-[var(--ink)]"}>
        {title}
      </SectionTitle>
      <div
        className={`mt-7 max-w-[1180px] border-y py-5 ${
          dark ? "border-[rgba(255,250,242,.22)]" : "border-[rgba(31,29,45,.18)]"
        }`}
      >
        <div className="mb-5 grid grid-cols-[1fr_.34fr_.14fr] gap-4">
          <span className={dark ? "h-px bg-[rgba(255,250,242,.38)]" : "h-px bg-[rgba(31,29,45,.24)]"} />
          <span className="h-px bg-[var(--yellow)]" />
          <span className="h-px bg-[var(--coral)]" />
        </div>
        <p className={`m-0 grid max-w-none gap-2 text-[clamp(1.02rem,1.55vw,1.25rem)] leading-[1.78] ${dark ? "text-[rgba(255,250,242,.88)]" : "text-[rgba(31,29,45,.74)]"}`}>
          {body}
        </p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav
      className="site-nav fixed inset-x-0 top-0 z-40 flex min-h-[var(--nav-h)] items-center justify-between gap-4 border-b border-[rgba(255,250,242,.14)] bg-[rgba(23,22,38,.82)] px-[clamp(1rem,4vw,3rem)] py-[.85rem] text-[var(--white)] backdrop-blur-[18px] max-[760px]:items-start"
      aria-label="主导航"
    >
      <a className="brand-link grid font-extrabold leading-[1.1]" href="#top" aria-label="回到首页">
        <span>搞点逸术</span>
        <small className="font-display text-[.72rem] font-normal uppercase">Guardian Art</small>
      </a>
      <div className="flex items-center justify-end gap-[clamp(.56rem,1.7vw,1.1rem)] whitespace-nowrap text-[.88rem] max-[760px]:max-w-[20rem] max-[760px]:flex-wrap max-[760px]:gap-y-[.35rem] max-[760px]:text-[.76rem]">
        {navLinks.map((link) => (
          <a key={link.href} className="nav-link relative opacity-[.86]" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header
      id="top"
      className="grid min-h-[96vh] items-end px-[clamp(1rem,4vw,4rem)] pb-[clamp(5rem,9vh,7rem)] pt-28 text-[var(--white)] max-[980px]:bg-[35%_center] max-[640px]:min-h-[94vh] max-[640px]:pb-14 max-[640px]:pt-36"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(23,22,38,.08), rgba(23,22,38,.38) 42%, rgba(23,22,38,.94)), linear-gradient(0deg, rgba(23,22,38,.35), rgba(23,22,38,.08)), url('/assets/hero-ai.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`${wrapClass} grid grid-cols-[minmax(0,1fr)_minmax(280px,420px)] items-end gap-[clamp(2rem,5vw,5rem)] max-[980px]:grid-cols-1`}>
        <div>
          <span className="font-display inline-flex w-fit border border-[rgba(255,250,242,.55)] bg-[rgba(23,22,38,.48)] px-[.65rem] py-[.28rem] text-[.78rem] uppercase">
            Art Workshop · Portfolio · Postgraduate
          </span>
          <h1 className="my-4 text-[clamp(4.6rem,11vw,9.2rem)] leading-[.88] tracking-[0] max-[640px]:text-[clamp(3.4rem,18vw,5.2rem)]">
            <span className="block w-max max-w-full [font-kerning:none] [letter-spacing:.08em]">搞点逸术</span>
            <span className="mt-[.08em] block w-max max-w-full [font-kerning:none] [letter-spacing:.08em]">工作室</span>
          </h1>
          <p className="m-0 max-w-[780px] text-[clamp(1.08rem,2vw,1.45rem)] leading-[1.72] text-[rgba(255,250,242,.9)]">
            一个以艺术交叉为主的创意工坊，面向舞蹈、戏剧、影视和相关艺术背景的创作者、爱好者。
          </p>
        </div>
        <aside className="reveal self-end bg-[var(--yellow)] p-4 text-[var(--ink)] shadow-[12px_12px_0_rgba(239,109,101,.88)] rotate-[-2deg] max-[980px]:max-w-[28rem]">
          <b className="mb-1 block text-[1.1rem]">没有标准答案</b>
          只有与你环环相扣的创意高光。我们把身体、镜头、现场与作品集重新组织成属于你的艺术语言。
        </aside>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className={`${sectionClass} bg-[#171626] text-[var(--white)]`} id="about">
      <div className={wideWrapClass}>
        <ActHeader
          eyebrow="Act 01 / Why Guardian Art"
          title="当兴趣需要方向，创作需要陪伴，就来搞点逸术。"
          body={
            <>
              <span>这里不是单一课程清单，而是一个能把想法、身体、镜头、舞台与升学路径连起来的创作现场。</span>
              <span className="mt-2 block">我们集结了一群青年艺术人：有人在赛事和剧场里持续创作，有人深耕教学与疗愈，也有人正在把跨媒介经验带回课堂。</span>
            </>
          }
        />

        <div className="grid grid-cols-[1.05fr_.95fr] gap-[clamp(1.2rem,3vw,3rem)] max-[980px]:grid-cols-1">
          <figure className="reveal m-0 overflow-hidden bg-[rgba(255,250,242,.06)] p-4">
            <img className="aspect-[16/10] w-full object-cover" src="/assets/about-route-ai.png" alt="从创作碎片走向清晰路径的抽象拼贴图" />
            <figcaption className="grid grid-cols-2 gap-3 pt-4 max-[640px]:grid-cols-1">
              {painPoints.map((point, index) => (
                <article key={point} className="grid min-h-[8.4rem] grid-cols-[3.2rem_minmax(0,1fr)] gap-3 bg-[rgba(255,250,242,.08)] p-4">
                  <span className="font-display grid aspect-square w-11 place-items-center bg-[var(--white)] text-[1rem] text-[var(--ink)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="m-0 self-center text-[clamp(.96rem,1.25vw,1.08rem)] leading-[1.68] text-[rgba(255,250,242,.82)]">
                    {point}
                  </p>
                </article>
              ))}
            </figcaption>
          </figure>

          <div className="reveal grid content-stretch gap-4">
            <div className="grid grid-cols-2 gap-4">
              {studioMetrics.map((metric, index) => (
                <article
                  key={metric.label}
                  className={`p-5 text-[var(--ink)] ${
                    index === 0 ? "bg-[var(--blue)]" : index === 1 ? "bg-[var(--pink)]" : index === 2 ? "bg-[var(--yellow)]" : "bg-[var(--white)]"
                  }`}
                >
                  <strong className="font-display block text-[clamp(2.6rem,5vw,4.4rem)] leading-none text-[var(--coral)]">
                    {metric.value}
                  </strong>
                  <span className="mt-3 block font-bold">{metric.label}</span>
                </article>
              ))}
            </div>
            <article className="grid min-h-[20rem] content-between bg-[var(--cyan)] p-[clamp(1.2rem,3vw,2rem)] text-[var(--ink)]">
              <div>
                <Eyebrow className="text-[rgba(31,29,45,.62)]">What We Believe</Eyebrow>
                <h3 className="m-0 text-[clamp(2rem,3.4vw,3.6rem)] leading-[1.05]">方向对了，努力才更有意义。</h3>
              </div>
              <p className="mb-0 mt-5 max-w-[38rem] text-[clamp(1rem,1.45vw,1.16rem)] leading-[1.78]">
                我们反对把创作者塞进同质化模板，更关心你为什么创作、怎样组织材料、如何让作品和目标真正连起来。
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className={`${sectionClass} bg-[#171626] text-[var(--white)]`} id="services">
      <div className={wideWrapClass}>
        <ActHeader
          eyebrow="Act 02 / Core Services"
          title="三大核心业务，覆盖从兴趣到专业的全路径。"
          body={
            <>
              <span>你可以先从一次工作坊体验进入，也可以带着作品集、升学、跨专业表达等更明确的目标来。</span>
              <span>我们会根据你的阶段，把体验、训练、创作与呈现串成一条能走下去的路线。</span>
            </>
          }
        />
        <WorkshopSlider tickets={serviceTickets} />
      </div>
    </section>
  );
}

function Workshops() {
  return (
    <section className={`${sectionClass} bg-[#171626] text-[var(--white)]`} id="workshops">
      <div className={wideWrapClass}>
        <ActHeader
          eyebrow="Act 03 / Workshops"
          title="五个入口，进入你的艺术现场。"
          body={
            <>
              <span>从肢体到戏剧到影像，从舞动到表达再到疗愈，总有一款适合你。</span>
              <span className="block">每个主题都可以独立体验，也可以组合成更完整的成长路线。</span>
            </>
          }
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {workshopCards.map((card) => (
            <article
              key={card.title}
              className="reveal grid min-h-[43rem] grid-rows-[28rem_1fr] overflow-hidden border border-[rgba(255,250,242,.18)] bg-[rgba(255,250,242,.05)] max-[640px]:min-h-0 max-[640px]:grid-rows-[24rem_auto]"
            >
              <img className="h-full w-full object-cover" src={card.image} alt={card.alt} />
              <div className="grid grid-rows-[auto_auto_1fr_auto] content-start gap-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className={`font-display grid aspect-square w-12 place-items-center text-[1rem] text-[var(--ink)] ${card.color}`}>
                    {card.number}
                  </span>
                  <small className="font-display mt-2 text-right uppercase text-[rgba(255,250,242,.56)]">{card.tagline}</small>
                </div>
                <h3 className="m-0 text-[clamp(1.35rem,2vw,1.85rem)] leading-[1.16]">{card.title}</h3>
                <p className="m-0 text-[rgba(255,250,242,.8)]">{card.body}</p>
                <p className="m-0 border-t border-[rgba(255,250,242,.16)] pt-3 text-[.94rem] leading-[1.65] text-[rgba(255,250,242,.68)]">
                  <b className="text-[var(--yellow)]">适合：</b>
                  {card.audience}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className={`${sectionClass} bg-[#171626] text-[var(--white)]`} id="portfolio">
      <div className={wideWrapClass}>
        <ActHeader
          eyebrow="Act 04 / Portfolio & Study"
          title="你的独特，才是最硬的竞争力。"
          body="无论你是想申请艺术院校、冲刺保研，还是为职业发展积累艺术履历，我们都会陪你从 0 到 1 搞定作品集；如果你正在准备研习和升学，也会把院校、专业与作品表达放在同一张地图里看。"
        />

        <div className="grid grid-cols-[minmax(280px,1fr)_minmax(0,2fr)] gap-[clamp(1.2rem,3vw,3rem)] max-[980px]:grid-cols-1">
          <div className="grid gap-4">
            {portfolioSteps.map((step, index) => (
              <article
                key={step.title}
                className={`ticket reveal relative grid content-start gap-3 overflow-hidden border border-[rgba(31,29,45,.2)] p-[clamp(.95rem,1.7vw,1.25rem)] text-[var(--ink)] ${
                  index === 0 ? "bg-[var(--cyan)]" : index === 1 ? "bg-[var(--yellow)]" : "bg-[var(--pink)]"
                }`}
              >
                <small className="font-display uppercase opacity-[.72]">{step.label}</small>
                <strong className="block text-[clamp(1.85rem,2.75vw,3rem)] leading-none">{step.title}</strong>
                <p className="m-0 mr-8 text-[clamp(.95rem,1.18vw,1.05rem)] leading-[1.58]">{step.body}</p>
                <div className="mr-8 border-t border-[rgba(31,29,45,.18)] pt-3">
                  <small className="font-display uppercase text-[var(--coral)]">{studyItems[index].title}</small>
                  <p className="m-0 mt-1 text-[.94rem] leading-[1.55] text-[rgba(31,29,45,.74)]">{studyItems[index].body}</p>
                </div>
              </article>
            ))}
          </div>

          <article className="reveal grid overflow-hidden bg-[var(--white)] text-[var(--ink)]">
            <img
              className="aspect-[16/10] w-full object-cover"
              src="/assets/postgraduate-path-ai.png"
              alt="抽象拼贴风格的考研升学路径示意图"
            />
            <div>
              <div className="p-[clamp(1rem,2.1vw,1.55rem)]">
              <Eyebrow>Postgraduate Entrance Exam</Eyebrow>
              <h3 className="m-0 text-[clamp(1.9rem,3.1vw,3.35rem)] leading-[1.02]">方向对了，研途才清晰。</h3>
              <p className="mb-0 mt-3 max-w-[42rem] text-[clamp(.98rem,1.25vw,1.08rem)] leading-[1.68] text-[rgba(31,29,45,.78)]">
                <span>考研不是把资料越堆越厚，而是知道该往哪里用力。</span>
                <span className="block">我们把目标院校、专业方法、作品准备和面试表达放进同一套节奏。</span>
              </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Faculty() {
  return (
    <section className={`${sectionClass} bg-[#171626] text-[var(--white)]`} id="team">
      <div className={wideWrapClass}>
        <ActHeader
          eyebrow="Act 05 / Faculty"
          title="谁会陪你一起？一群懂艺术，也懂你的领航员。"
          body={
            <>
              <span>我们的老师不是只讲方法的人，更像和你一起搞艺术的伙伴。</span>
              <span className="block">有人在剧场、影像、赛事和教学现场积累经验，有人擅长把灵感翻译成能执行的作品路径。</span>
            </>
          }
        />

        <div className="mb-[clamp(2rem,5vw,4rem)] grid grid-cols-[minmax(280px,1fr)_minmax(0,2fr)] gap-4 bg-[rgba(255,250,242,.06)] p-4 max-[980px]:grid-cols-1">
          <figure className="reveal m-0 overflow-hidden">
            <img className="h-full min-h-[28rem] w-full object-cover max-[980px]:aspect-[16/9] max-[980px]:min-h-0" src="/assets/faculty-collab-ai.png" alt="九个艺术学科导师协作的抽象拼贴图" />
          </figure>

          <article className="reveal grid content-between gap-6 bg-[var(--white)] p-[clamp(1.2rem,3vw,2rem)] text-[var(--ink)]">
            <div>
              <Eyebrow>Faculty Map</Eyebrow>
              <h3 className="m-0 max-w-[46rem] text-[clamp(2rem,3.4vw,3.6rem)] leading-[1.05]">
                不是单一老师，而是一张能互相支撑的创作网络。
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-3 max-[1100px]:grid-cols-2 max-[720px]:grid-cols-1">
              {teacherHighlights.map((item) => (
                <article key={item.title} className="border-t border-[rgba(31,29,45,.16)] pt-3">
                  <h4 className="m-0 font-display text-[1rem] uppercase tracking-[.04em] text-[var(--coral)]">{item.title}</h4>
                  <p className="m-0 mt-2 text-[clamp(.92rem,1.08vw,1rem)] font-bold leading-[1.55] text-[rgba(31,29,45,.76)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </article>
        </div>

        <div className="grid grid-cols-3 gap-[1.1rem] max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1">
          {featuredTeachers.map((teacher) => (
            <article
              key={teacher.name}
              className="teacher-card reveal relative flex flex-col overflow-hidden border border-[rgba(255,250,242,.18)] bg-[rgba(255,250,242,.94)] text-[var(--ink)]"
              data-number={teacher.number}
            >
              <img className="h-[30rem] w-full object-cover object-top max-[640px]:h-[28rem]" src={teacher.image} alt={teacher.alt} />
              <div className="relative z-[2] grid gap-3 p-[1.15rem]">
                <small className="font-display text-[rgba(31,29,45,.58)] uppercase">{teacher.field}</small>
                <strong className="text-[clamp(1.55rem,2.3vw,2.2rem)] leading-[1.1]">{teacher.name}</strong>
                <h3 className="m-0 text-[1.04rem] leading-[1.35] text-[var(--blue)]">{teacher.title}</h3>
                <p className="teacher-role m-0 text-[.94rem] font-extrabold leading-[1.55] text-[var(--coral)]">{teacher.role}</p>
                <ul className="teacher-list m-0 grid gap-[.34rem] border-t border-[rgba(31,29,45,.16)] py-0 pl-[1.05rem] pt-3 text-[.94rem] leading-[1.55]">
                  {teacher.works.map((work) => (
                    <li key={work}>
                      <HighlightedWork text={work} />
                    </li>
                  ))}
                </ul>
                <p className="teacher-bio m-0 border-t border-[rgba(31,29,45,.16)] pt-3 text-[.96rem] leading-[1.7] text-[rgba(31,29,45,.78)]">
                  <HighlightedBio text={teacher.bio} />
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function Venue() {
  return (
    <section className={`${sectionClass} bg-[#171626] text-[var(--white)]`} id="venue">
      <div className={wideWrapClass}>
        <ActHeader
          eyebrow="Act 06 / Venue"
          title="在哪里相遇？一个让灵感自由生长的空间。"
          body={
            <>
              <span>工作室藏在北京朝阳区西店村附近的艺术绿洲里。</span>
              <span className="mt-2 block">这里没有上课下课的硬边界，只有随时可以创作、排练、拍摄、休息、交流的自由。</span>
            </>
          }
        />

        <div className="reveal overflow-x-auto pb-4 scroll-smooth [scrollbar-width:thin]">
          <div className="flex snap-x snap-mandatory gap-4">
            {venueSpaces.map((space) => (
              <article
                key={space.title}
                className="grid flex-[0_0_clamp(300px,30vw,430px)] snap-start grid-rows-[17rem_auto] overflow-hidden bg-[var(--white)] text-[var(--ink)] shadow-[8px_8px_0_rgba(67,168,223,.18)] max-[640px]:flex-[0_0_86vw]"
              >
                <img className="h-full w-full object-cover" src={space.image} alt={space.alt} />
                <div className="grid gap-3 p-4">
                  <div className="flex items-center gap-3">
                    <span className="font-display grid aspect-square w-10 shrink-0 place-items-center bg-[#17337d] text-[var(--white)]">
                      {space.number}
                    </span>
                    <h3 className="m-0 text-[clamp(1.25rem,1.65vw,1.7rem)] leading-[1.12] text-[var(--ink)]">{space.title}</h3>
                  </div>
                  <p className="m-0 border-t border-[rgba(31,29,45,.14)] pt-3 text-[.94rem] leading-[1.58] text-[rgba(31,29,45,.76)]">
                    {space.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className={`${sectionClass} bg-[#171626] text-[var(--white)]`} id="contact">
      <div className={wideWrapClass}>
        <ActHeader
          eyebrow="Act 07 / Contact"
          title="所以，什么时候见？"
          body={
            <>
              <span>来影像里造一个自己的梦，去舞蹈里释放身体的渴望，在戏剧里演不一样的自己，让作品集成为被看见的敲门砖。</span>
              <span className="mt-2 block">欢迎来搞点逸术坐一坐，和我们聊聊你的下一步。</span>
            </>
          }
        />

        <div className="grid grid-cols-[minmax(280px,1fr)_minmax(0,2fr)] gap-[clamp(1rem,2.2vw,2rem)] max-[980px]:grid-cols-1">
          <article className="reveal grid overflow-hidden bg-[var(--white)] text-[var(--ink)]">
            <a
              className="block outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--white)]"
              href={studioMapUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`打开地图搜索${studioAddress}`}
            >
              <img className="h-[clamp(17rem,27vw,28rem)] w-full object-cover transition duration-300 hover:scale-[1.01]" src="/assets/map-location-ai.png" alt="东方金叶文创园 A5 门店位置示意图" />
            </a>
            <div className="grid gap-3 p-[clamp(1rem,2vw,1.4rem)]">
              <div>
                <Eyebrow>Location Map / Address</Eyebrow>
                <a
                  className="block max-w-[34rem] text-[var(--ink)] underline decoration-[rgba(255,87,79,.35)] decoration-2 underline-offset-[.18em] outline-none transition hover:text-[var(--coral)] hover:decoration-[var(--coral)] focus-visible:text-[var(--coral)]"
                  href={studioMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`打开地图搜索${studioAddress}`}
                >
                  <h3 className="m-0 text-[clamp(1.55rem,2.2vw,2.55rem)] leading-[1.05]">
                    {studioAddress}
                  </h3>
                </a>
                <p className="m-0 mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-[rgba(31,29,45,.18)] pt-3 text-[.95rem] font-bold text-[rgba(31,29,45,.76)]">
                  <span className="font-display text-[.74rem] uppercase tracking-[.08em] text-[var(--coral)]">Business Hours</span>
                  <span>营业时间：10:00-18:00</span>
                </p>
                <ExpectedVisitTime />
              </div>
            </div>
          </article>

          <article className="reveal bg-[rgba(255,250,242,.08)] p-2">
            <div className="grid content-start gap-3 p-[clamp(.45rem,1.35vw,.95rem)]">
              <div>
                <Eyebrow>Benefits</Eyebrow>
                <h3 className="m-0 text-[clamp(1.55rem,2.55vw,2.6rem)] leading-none">即日起，先来体验。</h3>
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(8.4rem,.32fr)] gap-2.5 max-[700px]:grid-cols-1">
                <div className="grid gap-2">
                  {benefits.map((benefit) => (
                    <article key={benefit.title} className="border-l-4 border-[var(--yellow)] bg-[rgba(255,250,242,.08)] px-3 py-2">
                      <small className="font-display uppercase text-[var(--coral)]">{benefit.label}</small>
                      <strong className="mt-1 block text-[clamp(.98rem,1.18vw,1.1rem)] leading-[1.22] text-[var(--white)]">
                        {benefit.title}
                      </strong>
                      <p className="m-0 mt-1 text-[.82rem] leading-[1.45] text-[rgba(255,250,242,.72)]">{benefit.body}</p>
                    </article>
                  ))}
                </div>
                <div className="grid min-h-full place-items-center bg-[var(--white)] p-2 max-[700px]:min-h-[12rem]">
                  <img className="h-full max-h-[18rem] w-full object-contain" src="/assets/wechat-qr.jpg" alt="搞点逸术官方公众号二维码" />
                </div>
              </div>
              <div className="mt-1 border-t border-[rgba(255,250,242,.14)] pt-3">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="font-display text-[.74rem] uppercase tracking-[.08em] text-[rgba(255,250,242,.62)]">
                    You may get
                  </span>
                  <span className="h-px flex-1 bg-[rgba(255,250,242,.16)]" />
                </div>
                <article className="overflow-hidden bg-[rgba(255,250,242,.9)] text-[var(--ink)]">
                  <img
                    className="aspect-[1983/793] w-full bg-[#17337d] object-cover"
                    src="/assets/takeaway-strip-ai.png"
                    alt="形象照、作品集录制、创意 idea 和全新自己的抽象拼贴组合插图"
                  />
                  <div className="grid grid-cols-4 max-[820px]:grid-cols-2">
                  {contactTakeaways.map((item) => (
                      <div key={item.title} className="grid min-h-[4.25rem] content-start gap-1.5 border-r border-[rgba(31,29,45,.12)] p-2 last:border-r-0">
                        <small className="font-display text-[.7rem] text-[var(--coral)]">{item.label}</small>
                        <strong className="text-[clamp(.82rem,1vw,1rem)] leading-[1.2]">{item.title}</strong>
                      </div>
                  ))}
                  </div>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className={`${wideWrapClass} reveal mt-[clamp(1.5rem,4vw,3rem)] grid grid-cols-[minmax(230px,.34fr)_minmax(0,1fr)] overflow-hidden border-y border-[rgba(255,250,242,.18)] bg-[rgba(23,51,125,.42)] max-[820px]:grid-cols-1`} aria-label="预约行动">
        <article className="bg-[var(--yellow)] p-[clamp(1rem,2.4vw,1.6rem)] text-[var(--ink)]">
          <small className="font-display uppercase opacity-[.72]">预约 / 咨询</small>
          <a className="mt-2 block text-[clamp(1.65rem,3vw,2.75rem)] font-black leading-none tracking-[0] whitespace-nowrap" href="tel:18810671967">
            18810671967
          </a>
        </article>
        <p className="m-0 flex items-center px-[clamp(1rem,2.6vw,2rem)] py-4 font-display text-[clamp(1.1rem,2vw,2rem)] font-black leading-[1.2] text-[var(--white)] [text-shadow:.04em_.04em_0_rgba(239,109,101,.9),.08em_.08em_0_rgba(246,217,84,.28)]">
          关注「搞点逸术」工作室，解锁更多免费艺术沙龙、资讯分享。
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(255,250,242,.16)] bg-[#171626] px-[clamp(1rem,4vw,4rem)] py-5 text-[.9rem] text-[rgba(255,250,242,.72)]">
      <div className={`${wrapClass} flex flex-wrap justify-between gap-4`}>
        <span>© 2026 搞点逸术 Guardian Art</span>
        <span>Art Workshop · Portfolio Production · Postgraduate Entrance Exam</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <div className="grain" aria-hidden="true" />
      <Navigation />
      <Hero />
      <main className="overflow-hidden">
        <About />
        <Services />
        <Workshops />
        <Portfolio />
        <Faculty />
        <Venue />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
