package br.com.j11.cagadas.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.j11.cagadas.application.repository.CagadaRepository;
import br.com.j11.cagadas.domain.model.projeto.Cagada;


@Service
public class CagadaService extends GumgaService<Cagada, Long> {

	private final CagadaRepository repository;

	@Autowired
	public CagadaService(CagadaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
