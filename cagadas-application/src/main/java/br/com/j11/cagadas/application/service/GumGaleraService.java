package br.com.j11.cagadas.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.j11.cagadas.application.repository.GumGaleraRepository;
import br.com.j11.cagadas.domain.model.projeto.GumGalera;


@Service
public class GumGaleraService extends GumgaService<GumGalera, Long> {

	private final GumGaleraRepository repository;

	@Autowired
	public GumGaleraService(GumGaleraRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
