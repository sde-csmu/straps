package com.neowave.promaly.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of ContractSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class ContractSearchRepositoryMockConfiguration {

    @MockBean
    private ContractSearchRepository mockContractSearchRepository;

}
