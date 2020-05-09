create database phapchung;

create table phapchung.user
(
    id int NOT NULL
    AUTO_INCREMENT,
    name varchar
    (50) not null,
    pwd varchar
    (50) not null,
    level BOOLEAN default false,
    totalcoin int default 0,
    constraint pk_user primary key
    (id)
);

    create table phapchung.infocoin
    (
        id int NOT NULL
        AUTO_INCREMENT,
    seri varchar
        (20) not null,
    keynumber varchar
        (20) not null,
    price int not null,
    active boolean default false,
    constraint pk_infocoin primary key
        (id)
);

        create table phapchung.addcoin
        (
            id_user int,
            id_coin int,
            date TIMESTAMP,

            constraint pk_addcoin primary key(id_user,id_coin),

            constraint fk_addcoinUser foreign key(id_user)
    references phapchung.user(id),

            constraint fk_addcoinInfocoin foreign key(id_coin)
    references phapchung.infocoin(id)
        );

        create table phapchung.log_getcoin
        (
            id int NOT NULL
            AUTO_INCREMENT,
    date timestamp,
    ip varchar
            (20),
    price int not null,
    id_user int not null,
    id_coin int not null,

    constraint pk_log_getcoin primary key
            (id),

    constraint fk_log_getcoinUser foreign key
            (id_user)
    references phapchung.user
            (id),

    constraint fk_log_getcoinInfocoin foreign key
            (id_coin)
    references phapchung.infocoin
            (id)
);

            create table phapchung.product
            (
                id int NOT NULL
                AUTO_INCREMENT,
    img varchar
                (255) not null,
    name varchar
                (40) not null,
    des varchar
                (255) not null,
    price int not null,
    constraint pk_product primary key
                (id)
);
                create table phapchung.warehouse
                (
                    id int NOT NULL
                    AUTO_INCREMENT,
    id_product int,
    id_user int,
    img varchar
                    (255) not null,
    name varchar
                    (40) not null,
    price int not null,
    active boolean default false,

    constraint pk_warehouse primary key
                    (id),

    constraint fk_warehouseProduct foreign key
                    (id_product)
    references phapchung.product
                    (id),

    constraint fk_warehouseUser foreign key
                    (id_user)
    references phapchung.user
                    (id)
);


