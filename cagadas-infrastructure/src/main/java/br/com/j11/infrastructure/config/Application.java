package br.com.j11.infrastructure.config;

import gumga.framework.application.GumgaRepositoryFactoryBean;

import java.util.Properties;

import gumga.framework.domain.GumgaQueryParserProvider;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@ComponentScan(basePackages = {"br.com.j11", "gumga.framework"})
@EnableJpaRepositories(repositoryFactoryBeanClass = GumgaRepositoryFactoryBean.class, basePackages = {"br.com.j11", "gumga.framework"})
@EnableTransactionManagement(proxyTargetClass = true)
public class Application {

    @Bean
    public static PropertyPlaceholderConfigurer dataConfigPropertyConfigurer() {
        PropertyPlaceholderConfigurer configurer = new PropertyPlaceholderConfigurer();
        configurer.setSearchSystemEnvironment(true);
        return configurer;
    }

    @Bean
    public static DataSource dataSource() {
        GumgaQueryParserProvider.defaultMap = GumgaQueryParserProvider.getOracleLikeMap();
        HikariConfig config = new HikariConfig();

        config.setDataSourceClassName("com.mysql.jdbc.jdbc2.optional.MysqlDataSource");
        config.addDataSourceProperty("url", "jdbc:mysql://localhost:3306/cagadas?zeroDateTimeBehavior=convertToNull");
        config.addDataSourceProperty("user", "root");
        config.addDataSourceProperty("password", "senha");
//        config.setDataSourceClassName("org.h2.jdbcx.JdbcDataSource");
//        config.addDataSourceProperty("url", "jdbc:h2:mem:test;MVCC=true");
//        config.addDataSourceProperty("user", "sa");
//        config.addDataSourceProperty("password", "sa");
        config.setMaximumPoolSize(20);

        config.setIdleTimeout(30000L);
        config.setInitializationFailFast(true);

        return new HikariDataSource(config);
    }

    @Bean
    @Autowired
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) {
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();

        Properties properties = new Properties();
        properties.put("eclipselink.weaving", "false");
//        properties.put("hibernate.hbm2ddl.auto", "update");
//        properties.put("hibernate.dialect", "org.hibernate.dialect.H2Dialect");

        properties.put("hibernate.hbm2ddl.auto", "update");
        properties.put("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
        properties.put("hibernate.ejb.naming_strategy", "org.hibernate.cfg.EJB3NamingStrategy");
        //properties.put("hibernate.show_sql", "true");
        //properties.put("hibernate.format_sql", "true");
        properties.put("hibernate.connection.charSet", "UTF-8");
        properties.put("hibernate.connection.characterEncoding", "UTF-8");
        properties.put("hibernate.connection.useUnicode", "true");
        properties.put("hibernate.jdbc.batch_size", "50");

        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("gumga.framework.domain","br.com.j11");
        factory.setDataSource(dataSource);

        factory.setJpaProperties(properties);
        factory.afterPropertiesSet();

        return factory;
    }

    @Bean
    @Autowired
    public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
        return new JpaTransactionManager(emf);
    }

}
