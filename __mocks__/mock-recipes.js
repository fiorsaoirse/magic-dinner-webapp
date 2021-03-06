import Recipe from '../src/entities/classes/recipe';
import Ingredient from '../src/entities/classes/ingredient';

const syrnick = {
    name: 'Сырники',
    comment: '',
    recipe: new Recipe('Сырники из творога',
        ['Положите весь творог в кастрюльку и разомните его вилкой так, чтобы в нем не осталось крупных комков. Разбейте в него яйца, всыпьте сахар и тщательно все перемешайте. Лучше не использовать слишком сухой или слишком влажный творог, иначе сырники будут разваливаться в процессе приготовления.',
            'Всыпьте в творог 5 столовых ложек (с горкой) муки и тщательно перемешайте. Можно добавить немного больше муки, сырники получатся тогда более плотными. Или муки можно добавить чуть меньше, и тогда сырники будут нежнее. В итоге у вас должна получиться однородная масса, из которой можно будет лепить сырники.',
            'Поставьте сковороду на средний огонь и налейте в нее подсолнечное масло.',
            'Насыпьте на тарелку немного муки. Слепите несколько небольших шариков из получившейся творожной массы и положите их на тарелку. Лучше лепить разом 4–5 шариков — столько, сколько поместится одновременно на сковороду. Затем по очереди обкатывайте творожные шарики в муке, плющите их в небольшие лепешки (они не должны быть слишком тонкие) и выкладывайте на сковороду.',
            'Обжаривайте сырники 1–2 минуты до появления золотистой корочки. Затем переверните их на другую сторону и также обжарьте до золотистого состояния.',
            'Повторяйте, пока творог не закончится.'],
        '2 порции',
        [new Ingredient('Творог', '500 г'),
            new Ingredient('Яйцо куриное', '2 штуки'),
            new Ingredient('Пшеничная мука', '6 столовых ложек'),
            new Ingredient('Сахар', '2 столовые ложки'),
            new Ingredient('Подсолнечное масло', '5 столовых ложек')],
        {
            calories: 1029,
            proteins: 55,
            fat: 64.6,
            carbs: 56.8,
        },
        '../../assets/DefaultRecipeImage.png'),
};

const cesar = {
    name: 'Салат "Цезарь" традиционный',
    comment: '',
    recipe: new Recipe('Салат «Цезарь» традиционный',
        ['Промыть, просушить и нарвать на небольшие кусочки листья салата, отложить в холодильник.',
            'В горячую сковородку положить 1 столовую ложку сливочного масла. После того, как оно полностью расплавится и начнет шипеть, кинуть нарезанный на пластины зубчик чеснока.',
            'Куриную грудку нарезать на кусочки приблизительно 1х3 см. Положить в сковороду к чесноку и маслу. Обжаривать на сильном огне приблизительно 10 минут до румяной корочки. Снять с огня.',
            'В ту же сковородку добавить еще одну столовую ложку сливочного масла и второй зубчик чеснока. В это время нарезать на небольшие кубики хлеб. Положить в сковороду и обжаривать до румяной корочки. Желательно непрерывно помешивать, чтобы не подгорело.',
            'Достать листья салата, туда же положить обжаренную куриную грудку, помидоры, нарезанные тонкой соломкой. Заправить соусом «Цезарь». Перемешать. Сверху положить получившиеся сухарики и натереть сыр.',
        ],
        '4 порции',
        [new Ingredient('Зеленый салат', '1 пучок'),
            new Ingredient('Помидоры', '1 штука'),
            new Ingredient('Куриное филе', '300 г'),
            new Ingredient('Белый хлеб', '6 кусков'),
            new Ingredient('Соус «Цезарь»', 'по вкусу'),
            new Ingredient('Сливочное масло', '2 столовые ложки'),
            new Ingredient('Чеснок', '2 зубчика'),
            new Ingredient('Сыр пармезан', 'по вкусу'),
        ],
        {
            calories: 245,
            proteins: 20.4,
            fat: 11.3,
            carbs: 14.1,
        },
        'https://img09.rl0.ru/eda/c620x415i/s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg'),
};

const chicken = {
    name: 'Курица в кисло-сладком соусе',
    comment: '',
    recipe: new Recipe('Курица в кисло-сладком соусе по-китайски',
        ['Куриное филе нарезать тонкими полосками, сложить в миску, залить соевым соусом (примерно 6 столовых ложек) и' +
        ' немного поперчить.',
        'Для приготовления соуса в глубокой сковородке, лучше в воке, смешать уксус, соевый соус (примерно 4 столовые' +
            ' ложки), томатную пасту. Поставить на огонь и прогреть, добавив часть сахара. Добавить воды, положить' +
            ' нарезанный полосками перец, консервированный ананас и помидоры. Попробовать на вкус. Если соус слишком кислый, добавить остатки сахара. Тушить на медленном огне около 10 минут. Овощи должны оставаться слегка твердыми. Соус должен быть в меру густым.',
        'Обжарить курицу, соединить с соусом и потушить еще минут 10. Подавать с рисом.',
        ],
        '4 порции',
        [new Ingredient('Куриное филе', '500 г'),
            new Ingredient('Соевый соус', '10 столовых ложек'),
            new Ingredient('Яблочный уксус', '40 мл'),
            new Ingredient('Сахар', '5 чайных ложек'),
            new Ingredient('Вода', '½ стакана'),
            new Ingredient('Томатная паста', '2 столовые ложки'),
            new Ingredient('Сладкий перец', '1 штука'),
            new Ingredient('Консервированный ананас', '1 кусок'),
            new Ingredient('Помидоры', '2 штуки')],
        {
            calories: 261,
            proteins: 35.5,
            fat: 1.8,
            carbs: 23.9,
        },
        'https://img09.rl0.ru/eda/c620x415i/s2.eda.ru/StaticContent/Photos/170122183544/170209213750/p_O.jpg'),
};

const pork = {
    name: 'Свиная рулька с тушеной капустой и картофелем',
    comment: 'Нет калорийности, проблемы с текстом шагов приготовления',
    recipe: new Recipe(
        'Свиная рулька с тушеной капустой и картофелем',
        [
            'Свиная рулька, или голяшка, бывает передняя или задняя — вторая подходит лучше, потому что в ней больше' +
            ' мяса. Весит она около 1,5 кг. Если на ней ­замечены остатки щетины, следует опалить ее горелкой или просто зажигалкой — на вкусовых качествах это не скажется, но выглядеть будет аппетитнее.',
            'Выбрать глубокую кастрюлю диаметром примерно с рульку, которая будет в ней вариться. Вскипятить в ней' +
            ' пол-литра ­воды, добавить пиво, тимьян, розмарин, перец горошком, душистый перец и щепотку соли. Уложить в кастрюлю голяшку, так чтобы она была целиком покрыта жидкостью, и варить под крышкой на среднем огне около часа.',
            'Растопить масло до мягкости — но так, чтобы оно не лилось. ­Если вы топите сливочное масло с самого' +
            ' начала — дайте ему немного остыть и затвердеть. Вытащить вареную рульку из кастрюли, выложить на' +
            ' противень, застеленный пергаментом, и хорошенько обмазать маслом с помощью кулинарной кисти.',
            'Разогреть духовку до 180–200 градусов и отправить ' +
            'в нее голяшку на полчаса-час. Внутри мясо, собственно, уже готово, так что теперь в центре внимания —' +
            ' коричневая хрустящая корочка. Как только она покажется достаточно на ваш вкус поджаренной, мясо можно вынимать из печи.',
            'Порубить квашеную капусту на отрезки, которые будет удобно есть вилкой. От капустного рассола при этом' +
            ' избавляться не спешите. Разогреть четыре чайные ложки растительного масла, обжарить в нем капусту минуты три, затем добавить тмин, гвоздику и лавровый лист, долить 50 мл рассола и тушить под крышкой до мягкости.',
            'Минут через пятнадцать-двадцать рассол выпарится, тогда следует добавить ложку томатной пасты и,' +
            ' помешивая, слегка обжарить в ней капусту. Когда она станет слегка приставать ко дну сотейника, подлить' +
            ' в него сок половины апельсина и бросить натертое яблоко. Тушить под крышкой еще минут десять, периодически помешивая, — пока и апельсиновый сок не впитается в капусту.',
            'Крупно нарезать картошку — ­если кожура у нее не слишком грубая, лучше ее не счищать. Отварить в' +
            ' подсоленной воде до готовности, а потом обжарить на растительном масле. Чтобы золотистая корочка покрыла всю ее поверхность, лучше всего научиться подбрасывать ломтики на сковороде прямо на огне.',
            'Подавать голяшку целиком на большом блюде вместе с тушеной капустой, ломтиками жареной картошки и' +
            ' соусами — горчицей, хреном и острым томатным. По восточноевропейским меркам все это составит одну порцию — но на самом деле это вопрос комплекции едока.',
        ],
        '1',
        [new Ingredient('Свиная рулька', '1 штука'),
            new Ingredient('Тимьян', '10 г'),
            new Ingredient('Розмарин', '2 г'),
            new Ingredient('Пиво', '1 л'),
            new Ingredient('Черный перец горошком', '6 штук'),
            new Ingredient('Топленое масло', '25 г'),
            new Ingredient('Молотый душистый перец', '6 штук'),
            new Ingredient('Тмин', 'щепотка'),
            new Ingredient('Квашеная капуста', '250 г'),
            new Ingredient('Зеленые яблоки', '⅓ штуки'),
            new Ingredient('Гвоздика', '1 штука'),
            new Ingredient('Апельсины', '½ штуки'),
            new Ingredient('Томатная паста', '1 столовая ложка'),
            new Ingredient('Лавровый лист', '1 штука'),
            new Ingredient('Молодой картофель', '200 г'),
            new Ingredient('Соль', 'по вкусу'),
            new Ingredient('Перец черный молотый', 'по вкусу'),
        ],
        {
            calories: 0,
            proteins: 0,
            fat: 0,
            carbs: 0,
        },
        'https://eda.ru/img/eda/c620x415i/s2.eda.ru/StaticContent/Photos/120214123706/170125152804/p_O.jpg',
    ),
};

const soup = {
    name: 'Крем-суп из цветной капусты',
    comment: 'Некорректная обработка шагов, если к ним нет картинок',
    recipe: new Recipe(
        'Крем-суп из цветной капусты',
        [
            'Цветную капусту разобрать на соцветия, самые маленькие из них сварить целиком в подсоленной воде, а' +
            ' крупные порезать на более мелкие части.',
            'Как только маленькие соцветия сварятся, надо их тут же остудить, чтобы сохранить состояние аль-денте.',
            'Параллельно надо растопить в сотейнике или кастрюле сливочное масло и обжарить на нем мелкорубленый' +
            ' порей (только белую часть), не забывая все время перемешивать, чтобы не дать луку потемнеть.',
            'Влить в кастрюлю молоко, добавить нарезанные соцветия капусты и оставить вариться на небольшом огне в' +
            ' течение пяти минут. Молоко при этом не должно бурно кипеть, а лишь спокойно побулькивать. Через пять минут влить в кастрюлю горячий куриный бульон и варить, пока капуста не станет совсем мягкой.',
            'Снять с огня. Посолить, поперчить по вкусу, добавить мелко нарезанную петрушку, сливки и прокрутить суп в блендере.' +
            ' Подавать в глубокой тарелке, положив в нее маленькие похрустывающие соцветия цветной капусты и немного' +
            ' красной икры.'
        ],
        '6',
        [
            new Ingredient('Перец черный молотый', 'по вкусу'),
            new Ingredient('Соль', 'по вкусу'),
            new Ingredient('Петрушка', '20 г'),
            new Ingredient('Сливки 35%-ные', '100 мл'),
            new Ingredient('Красная икра', '20 г'),
            new Ingredient('Сливочное масло', '100 г'),
            new Ingredient('Куриный бульон', '½ л'),
            new Ingredient('Молоко', '½ л'),
            new Ingredient('Лук-порей', '1 штука'),
            new Ingredient('Цветная капуста', '1 штука'),
        ],
        {
            calories: 314,
            proteins: 10.7,
            fat: 23.9,
            carbs: 16.2,
        },
        'https://eda.ru/img/eda/c620x415i/s2.eda.ru/StaticContent/Photos/150615095301/150617153237/p_O.jpg'
    )
};

const cabbage = {
    name: 'Печеная брюссельская капуста с чесноком',
    comment: 'Выставлялась картинка по-умолчанию',
    recipe:  new Recipe(
        'Печеная брюссельская капуста с чесноком',
        [
            'Разогрейте духовку до 180 градусов.',
            'Выложите кочанчики капусты в огнеупорную сковороду и перемешайте с измельченным чесноком. Сбрызните' +
            ' лимонным соком и оливковым маслом, посолите и поперчите. Хорошо перемешайте.',
            'Отправьте в духовку на 20 минут, затем перемешайте и готовьте еще 10 минут. Капуста должна стать' +
            ' румяного цвета и слегка хрустящая снаружи.',
            'Снова посолите и подавайте.',
        ],
        '4',
        [
            new Ingredient('Чеснок', '3 зубчика'),
            new Ingredient('Брюссельская капуста', '500 г'),
            new Ingredient('Лимонный сок', '1 чайная ложка'),
            new Ingredient('Оливковое масло', '2 столовые ложки'),
            new Ingredient('Соль', 'по вкусу'),
            new Ingredient('Свежемолотый черный перец', 'по вкусу'),
        ],
        {
            calories: 153,
            proteins: 6.4,
            fat: 10,
            carbs: 11.9,
        },
        'https://eda.ru/img/eda/c620x415i/s2.eda.ru/StaticContent/Photos/120214134655/120214140314/p_O.jpg'
    )
};

export default [syrnick, cesar, chicken, pork, soup, cabbage];
